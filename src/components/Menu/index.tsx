import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { Button } from "../Card/styles";
import { MenuList, MenuItem, Title, Desc, Modal, ModalContent, Botao } from "./styles";
import close from '../../assets/fechar.png'
import type { Cardapio, Restaurante } from "../../pages/Home";
import { add, open } from "../../store/reducers/cart";

interface ModalState extends Cardapio {
    invisible: boolean
}

type Props = {
    restaurante: Restaurante
}

export const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(preco)
}

const Menu = ({ restaurante }: Props) => {
    const pratos = restaurante.cardapio

    const [modal, setModal] = useState<ModalState>({
        invisible: true,
        foto: '',
        preco: 0,
        id: 0,
        nome: '',
        descricao: '',
        porcao: ''
    })

    const closeModal = () => {
        setModal({
            invisible: true,
            foto: '',
            preco: 0,
            id: 0,
            nome: '',
            descricao: '',
            porcao: ''
        })
    }

    const getDesc = (desc: string) => {
        if (desc.length > 150) {
            return desc.slice(0, 147) + '...'
        }
        return desc
    }

    const dispatch = useDispatch()
    const addCart = () => {
        dispatch(add(modal))
        dispatch(open())
    }

    return (
        <div className="container">
            <MenuList>
                {pratos.map((prato) => (
                    <li onClick={() => {
                        setModal({
                            invisible: false,
                            foto: prato.foto,
                            preco: prato.preco,
                            id: prato.id,
                            nome: prato.nome,
                            descricao: prato.descricao,
                            porcao: prato.porcao
                        })
                    }}>
                        <MenuItem>
                            <img src={prato.foto} alt={prato.nome} />
                            <Title>{prato.nome}</Title>
                            <Desc>
                                {getDesc(prato.descricao)}
                            </Desc>
                            <Link to='#'>
                                <Botao>Adicionar ao carrinho</Botao>
                            </Link>
                        </MenuItem>
                    </li>
                ))}
            </MenuList>
            <Modal className={modal.invisible ? 'invisible' : ''}>
                <ModalContent className="container">
                    <header>
                        <img src={close} alt="Ícone de fechar" onClick={() => {
                            closeModal()
                        }} />
                    </header>
                    <img src={modal.foto} alt="Imagem do prato" />
                    <div>
                        <h4>{modal.nome}</h4>
                        <p>
                            {modal.descricao}
                            <br /><br />
                            {modal.porcao}
                        </p>
                        <Button onClick={addCart}>Adicionar ao carrinho - {formataPreco(modal.preco)}</Button>
                    </div>
                </ModalContent>
                <div className="overlay" onClick={() => {
                    closeModal()
                }}></div>
            </Modal>
        </div>
    )
}

export default Menu