import { Titulo, Form, Row, InputGroup } from './styles'
import {CartContainer, Overlay, Sidebar} from '../../components/Cart/styles'
import { Botao } from "../../components/Menu/styles"
import { useState } from 'react'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { close, open } from '../../store/reducers/cart'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const {isOpen, items} = useSelector((state: RootReducer) => state.cart)
    const [openPayment, setOpenPayment] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const closeCart = () => {
        dispatch(close())
    }

    const goToCart = () => {
        navigate(-1)
        dispatch(open())
    }

    return (
        <>
            <CartContainer className='is-open'>
                <Overlay onClick={closeCart} />
                <Sidebar>
                    {openPayment ? (
                        <>
                            <Titulo>
                                Pagamento - Valor a pagar <span>R$ 190,90</span>
                            </Titulo>
                            <Form>

                                <Row>
                                    <InputGroup>
                                        <label htmlFor="cardName">Nome no cartão</label>
                                        <input type="text" id="name" />
                                    </InputGroup>
                                </Row>

                                <Row>
                                    <InputGroup maxWidth='228px'>
                                        <label htmlFor="cardNumber">Número do cartão</label>
                                        <input type="number" id="cardNumber" />
                                    </InputGroup>

                                    <InputGroup maxWidth='87px'>
                                        <label htmlFor="cardCode">CVV</label>
                                        <input type="number" id="cardCode" />
                                    </InputGroup>
                                </Row>

                                <Row>
                                    <InputGroup maxWidth='155px'>
                                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                                        <input type="number" id="expiresMonth" />
                                    </InputGroup>

                                    <InputGroup maxWidth='155px'>
                                        <label htmlFor="expiresYear">Ano de vencimento</label>
                                        <input type="number" id="expiresYear" />
                                    </InputGroup>
                                </Row>

                                <Botao className='margin-top'>Finalizar pagamento</Botao>
                                <Botao onClick={() => setOpenPayment(false)}>Voltar para a edição de endereço</Botao>
                            </Form>
                        </>
                    ) : (
                        <>
                            <Titulo>Entrega</Titulo>
                            <Form>
                                <Row>
                                    <InputGroup>
                                        <label htmlFor="name">Quem irá receber</label>
                                        <input type="text" id="name" />
                                    </InputGroup>
                                </Row>
                                
                                <Row>
                                    <InputGroup>
                                        <label htmlFor="address">Endereço</label>
                                        <input type="text" id="address" />
                                    </InputGroup>
                                </Row>

                                <Row>
                                    <InputGroup>
                                        <label htmlFor="city">Cidade</label>
                                        <input type="text" id="city" />
                                    </InputGroup>
                                </Row>

                                <Row>
                                    <InputGroup maxWidth='155px'>
                                        <label htmlFor="cep">CEP</label>
                                        <input type="number" id="cep" />
                                    </InputGroup>

                                    <InputGroup maxWidth='155px'>
                                        <label htmlFor="num">Número</label>
                                        <input type="number" id="num" />
                                    </InputGroup>
                                </Row>

                                <Row>
                                    <InputGroup>
                                        <label htmlFor="complemento">Complemento (opcional)</label>
                                        <input type="text" id="complemento" />
                                    </InputGroup>
                                </Row>
                
                                <Botao onClick={() => setOpenPayment(true)} className='margin-top'>Continuar com o pagamento</Botao>
                                <Botao onClick={goToCart}>Voltar para o carrinho</Botao>
                            </Form>
                        </>
                    )}
                </Sidebar>
            </CartContainer>
        </>
    )
}

export default Checkout