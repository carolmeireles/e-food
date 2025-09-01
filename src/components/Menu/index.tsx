import { Link } from "react-router-dom";
import { Button } from "../Card/styles";
import MenuItem from "../MenuItem";
import { MenuList, Modal, ModalContent } from "./styles";
import pizza from '../../assets/pizza.png'
import close from '../../assets/fechar.png'

const Menu = () => (
    <div className="container">
        <MenuList>
            <li>
                <MenuItem />
            </li>
            <li>
                <MenuItem />
            </li>
            <li>
                <MenuItem />
            </li>
            <li>
                <MenuItem />
            </li>
            <li>
                <MenuItem />
            </li>
            <li>
                <MenuItem />
            </li>
        </MenuList>
        <Modal className="invisible">
            <ModalContent className="container">
                <header>
                    <img src={close} alt="Ícone de fechar" />
                </header>
                <img src={pizza} alt="Imagem do prato" />
                <div>
                    <h4>Pizza Marguerita</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ipsum, minus provident ducimus, aliquam magnam culpa fugiat animi quam ab eaque vel quis velit fuga magni, modi expedita. Porro, iste.
                    </p>
                    <p>
                        Serve de 2 a 3 pessoas
                    </p>
                    <Link to='#'>
                        <Button>Adicionar ao carrinho - R$ 60,90</Button>
                    </Link>
                </div>
            </ModalContent>
            <div className="overlay"></div>
        </Modal>
    </div>
)

export default Menu