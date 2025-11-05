import { CartContainer, Overlay, Sidebar, CartItem, Excluir, Total } from './styles'
import excluir from '../../assets/excluir.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Menu'
import { Botao } from '../Menu/styles'
import Checkout from '../../pages/Checkout'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const {isOpen, items} = useSelector((state: RootReducer) => state.cart)
    const [openForm, setOpenForm] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    const goToCheckout = () => {
        navigate('/checkout')
        closeCart()
    }
    
    // if(items.length = 0) {
    //     return (
    //         <p>
    //             O carrinho está vazio. Adicione pelo menos um prato para continuar.
    //         </p>
    //     )
    // }

    return (
            <CartContainer className={isOpen ? 'is-open' : ''}>
                <Overlay onClick={closeCart} />
                <Sidebar>
                    {/* {openForm ? (
                        <Checkout />
                    ) : ( */}
                        <>
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
                            <Botao onClick={goToCheckout}>Continuar com a entrega</Botao>
                        </>
                    {/* )} */}
                </Sidebar>
            </CartContainer>
    )
}

export default Cart