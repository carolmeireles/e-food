import { CartContainer, Overlay, Sidebar, CartItem, Excluir, Total } from './styles'
import excluir from '../../assets/excluir.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Menu'
import { Botao } from '../Menu/styles'

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
                </ul>
                <Total>
                    Valor total
                    <span>{formataPreco(getTotalPrice())}</span>
                </Total>
                <Botao>Continuar com a entrega</Botao>
            </Sidebar>
        </CartContainer>
    )
}

export default Cart