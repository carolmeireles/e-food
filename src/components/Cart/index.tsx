import { CartContainer, Overlay, Sidebar, CartItem, Excluir, Total } from './styles'
import excluir from '../../assets/excluir.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Menu'
import { Botao } from '../Menu/styles'
// import { useState } from 'react'
// import Checkout from '../Checkout'
import { openCheckout } from '../../store/reducers/checkout'

const Cart = () => {
    const {isOpen, items} = useSelector((state: RootReducer) => state.cart)
    //const [openCheckout, setOpenCheckout] = useState(false)
    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const abrirCheckout = () => {
        dispatch(close())
        dispatch(openCheckout())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
            return(acumulador += valorAtual.preco!)
        }, 0)
    }
    
    if(items.length === 0) {
        return (
            <>
                <CartContainer className={isOpen ? 'is-open' : ''}>
                <Overlay onClick={closeCart} />
                <Sidebar>
                    <p>
                        O carrinho está vazio. Adicione pelo menos um prato para continuar.
                    </p>
                </Sidebar>
                </CartContainer>
            </>
        )
    }

    return (
            <CartContainer className={isOpen ? 'is-open' : ''}>
                <Overlay onClick={closeCart} />
                <Sidebar>
                    {/* {openCheckout ? (
                        <Checkout />
                    ) : ( */}
                        <>
                            <ul>
                                {items.map((item) => (
                                    <CartItem key={item.id}>
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
                            <Botao onClick={abrirCheckout}>Continuar com a entrega</Botao>
                        </>
                    {/* )} */}
                </Sidebar>
            </CartContainer>
    )
}

export default Cart