import { CartContainer, Overlay, Sidebar, CartItem, Excluir, Total, Button } from './styles'
import pizza from '../../assets/pizza2.png'
import excluir from '../../assets/excluir.png'

const Cart = () => {

    return (
        <CartContainer>
            <Overlay />
            <Sidebar>
                <ul>
                    <CartItem>
                        <img src={pizza} alt="Pizza Marguerita" />
                        <div>
                            <h3>Pizza Marguerita</h3>
                            <span>R$ 60,90</span>
                        </div>
                        <Excluir src={excluir} alt="Lixeira" />
                    </CartItem>
                </ul>
                <Total>
                    Valor total
                    <span>R$ 182,70</span>
                </Total>
                <Button>Continuar com a entrega</Button>
            </Sidebar>
        </CartContainer>
    )
}

export default Cart