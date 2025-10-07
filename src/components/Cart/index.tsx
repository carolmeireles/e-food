import { CartContainer, Overlay, Sidebar, CartItem, BtnExcluir, Total, Button } from './styles'
import pizza from '../../assets/pizza2.png'
import excluir from '../../assets/excluir.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
    const {isOpen, items} = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <Sidebar>
                <ul>
                    <CartItem>
                        <img src={pizza} alt="Pizza Marguerita" />
                        <div>
                            <h3>Pizza Marguerita</h3>
                            <span>R$ 60,90</span>
                        </div>
                        <BtnExcluir /*onClick={() => removeItem()}*/ />
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