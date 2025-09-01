import { Link } from "react-router-dom"

import { Button, Desc, MenuContainer, Title } from "./styles"
import pizza from '../../assets/pizza.png'

const MenuItem = () => (
    <MenuContainer>
        <img src={pizza} alt="pizza" />
        <Title>Pizza Marguerita</Title>
        <Desc>
            A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </Desc>
        <Link to='#'>
            <Button>Adicionar ao carrinho</Button>
        </Link>
    </MenuContainer>
)

export default MenuItem