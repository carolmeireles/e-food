import { CartContainer, Overlay, Sidebar, CartItem, Excluir, Total, Button } from './styles'
import pizza from '../../assets/pizza2.png'
import excluir from '../../assets/excluir.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Menu'

const Cart = () => {
    const {isOpen, items} = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
            return(acumulador += valorAtual.preco!)
        }, 0)
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <Sidebar>
                <ul>
                    {items.map((item) => (
                        <CartItem>
                            <img src={item.foto} alt={item.nome} />
                            <div>
                                <h3>{item.nome}</h3>
                                <span>{formataPreco(item.preco)}</span>
                            </div>
                            <Excluir src={excluir} onClick={() => removeItem(item.id)} />
                        </CartItem>
                    ))}
                    {/* REMOVER DEPOIS */}
                    <CartItem>
                        <img src={pizza} alt="Pizza Marguerita" />
                        <div>
                            <h3>Pizza Marguerita</h3>
                            <span>R$ 60,90</span>
                        </div>
                        <Excluir src={excluir} />
                    </CartItem>
                </ul>
                <Total>
                    Valor total
                    <span>{formataPreco(getTotalPrice())}</span>
                </Total>
                <Button>Continuar com a entrega</Button>
            </Sidebar>
        </CartContainer>
    )
}

export default Cart