import { Titulo, Form, Row, InputGroup } from './styles'
import {CartContainer, Overlay, Sidebar} from '../../components/Cart/styles'
import { Botao } from "../../components/Menu/styles"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { close, open } from '../../store/reducers/cart'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'

const Checkout = () => {
    //const {isOpen, items} = useSelector((state: RootReducer) => state.cart)
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

    const form = useFormik({
        initialValues: {
            name: '',
            address: '',
            city: '',
            cep: '',
            num: '',
            complemento: '',
            cardName: '',
            cardNumber: '',
            cardCode: '',
            expiresMonth: '',
            expiresYear: ''
        },
        onSubmit: (values) => {
            // delivery: {
            //     receiver: values.name,
            //     address: {
            //         description: values.address,
            //         city: values.city,
            //         zipCode: values.cep,
            //         number: Number(values.num),
            //         complement: values.complemento
            //     },
            //     payment: {
            //         card: {
            //             name: values.cardName,
            //             number: values.cardNumber,
            //             code: values.cardCode,
            //             expires: {
            //                 month: values.expiresMonth,
            //                 year: values.expiresYear
            //             }
            //         }
            //     }
            // }
        }
    })

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
                                        <input type="text" id="cardName" value={form.values.cardName} />
                                    </InputGroup>
                                </Row>

                                <Row>
                                    <InputGroup maxWidth='228px'>
                                        <label htmlFor="cardNumber">Número do cartão</label>
                                        <input type="number" id="cardNumber" value={form.values.cardNumber} />
                                    </InputGroup>

                                    <InputGroup maxWidth='87px'>
                                        <label htmlFor="cardCode">CVV</label>
                                        <input type="number" id="cardCode" value={form.values.cardCode} />
                                    </InputGroup>
                                </Row>

                                <Row>
                                    <InputGroup maxWidth='155px'>
                                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                                        <input type="number" id="expiresMonth" value={form.values.expiresMonth} />
                                    </InputGroup>

                                    <InputGroup maxWidth='155px'>
                                        <label htmlFor="expiresYear">Ano de vencimento</label>
                                        <input type="number" id="expiresYear" value={form.values.expiresYear} />
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
                                        <input type="text" id="name" value={form.values.name} />
                                    </InputGroup>
                                </Row>
                                
                                <Row>
                                    <InputGroup>
                                        <label htmlFor="address">Endereço</label>
                                        <input type="text" id="address" value={form.values.address} />
                                    </InputGroup>
                                </Row>

                                <Row>
                                    <InputGroup>
                                        <label htmlFor="city">Cidade</label>
                                        <input type="text" id="city" value={form.values.city} />
                                    </InputGroup>
                                </Row>

                                <Row>
                                    <InputGroup maxWidth='155px'>
                                        <label htmlFor="cep">CEP</label>
                                        <input type="number" id="cep" value={form.values.cep} />
                                    </InputGroup>

                                    <InputGroup maxWidth='155px'>
                                        <label htmlFor="num">Número</label>
                                        <input type="number" id="num" value={form.values.num} />
                                    </InputGroup>
                                </Row>

                                <Row>
                                    <InputGroup>
                                        <label htmlFor="complemento">Complemento (opcional)</label>
                                        <input type="text" id="complemento" value={form.values.complemento} />
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