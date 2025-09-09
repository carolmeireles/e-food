import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../Card/styles";
import { MenuList, MenuItem, Title, Desc, Modal, ModalContent, Botao } from "./styles";
import close from '../../assets/fechar.png'
import type { Cardapio, Restaurante } from "../../pages/Home";

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
                            <img src={prato.foto} alt="pizza" />
                            <Title>{prato.nome}</Title>
                            <Desc>
                                {prato.descricao}
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
                        <Link to='#'>
                            <Button>Adicionar ao carrinho - {formataPreco(modal.preco)}</Button>
                        </Link>
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