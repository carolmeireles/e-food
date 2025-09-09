import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../Card/styles";
import MenuItem from "../MenuItem";
import { MenuList, Modal, ModalContent } from "./styles";
import pizza from '../../assets/pizza2.png'
import close from '../../assets/fechar.png'
import type { Cardapio, Restaurante } from "../../pages/Home";

interface ModalState {
    invisible: boolean
}

type Props = {
    restaurante: Restaurante
    //pratos: Cardapio[]
}

const Menu = ({ restaurante }: Props) => {

    const pratos = restaurante.cardapio

    const [modal, setModal] = useState<ModalState>({
        invisible: true
    })

    const closeModal = () => {
        setModal({
            invisible: true
        })
    }

    return (
        <div className="container">
            <MenuList>
                {pratos.map(() => (
                    <li onClick={() => {
                        setModal({
                            invisible: false
                        })
                    }}>
                        <MenuItem />
                    </li>
                ))}
                {/* <li onClick={() => {
                    setModal({
                        invisible: false
                    })
                }}>
                    <MenuItem />
                </li>
                <li onClick={() => {
                    setModal({
                        invisible: false
                    })
                }}>
                    <MenuItem />
                </li>
                <li onClick={() => {
                    setModal({
                        invisible: false
                    })
                }}>
                    <MenuItem />
                </li>
                <li onClick={() => {
                    setModal({
                        invisible: false
                    })
                }}>
                    <MenuItem />
                </li>
                <li onClick={() => {
                    setModal({
                        invisible: false
                    })
                }}>
                    <MenuItem />
                </li>
                <li onClick={() => {
                    setModal({
                        invisible: false
                    })
                }}>
                    <MenuItem />
                </li> */}
            </MenuList>
            <Modal className={modal.invisible ? 'invisible' : ''}>
                <ModalContent className="container">
                    <header>
                        <img src={close} alt="Ícone de fechar" onClick={() => {
                            closeModal()
                        }} />
                    </header>
                    <img src={pizza} alt="Imagem do prato" />
                    <div>
                        <h4>Pizza Marguerita</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam distinctio cum incidunt sapiente, ut impedit, doloremque rerum quas, a magnam itaque blanditiis voluptas? Dolorum nobis non eius eaque repellat!
                            <br /><br />
                            Serve de 2 a 3 pessoas
                        </p>
                        <Link to='#'>
                            <Button>Adicionar ao carrinho - R$ 60,90</Button>
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