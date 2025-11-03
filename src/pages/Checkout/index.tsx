import { Form, InputRow } from './styles'
import { Botao } from "../../components/Menu/styles"
import { useState } from 'react'

const Checkout = () => {
    const [openPayment, setOpenPayment] = useState(false)

    return (
        <>
            {openPayment ? (
                <>
                    <h3>
                        Pagamento - Valor a pagar <span>R$ 190,90</span>
                    </h3>
                    <form>
                        <InputRow>
                            <label htmlFor="cardName">Nome no cartão</label>
                            <input type="text" id="name" />
                        </InputRow>

                        <InputRow>
                            <label htmlFor="cardNumber">Número do cartão</label>
                            <input type="number" id="cardNumber" />

                            <label htmlFor="cardCode">CVV</label>
                            <input type="number" id="cardCode" />
                        </InputRow>

                        <InputRow>
                            <label htmlFor="expiresMonth">Mês de vencimento</label>
                            <input type="number" id="expiresMonth" />

                            <label htmlFor="expiresYear">Ano de vencimento</label>
                            <input type="number" id="expiresYear" />
                        </InputRow>

                        <Botao>Finalizar pagamento</Botao>
                        <Botao onClick={() => setOpenPayment(false)}>Voltar para a edição de endereço</Botao>
                    </form>
                </>
            ) : (
                <>
                    <h3>Entrega</h3>
                    <Form>
                        <InputRow>
                            <label htmlFor="name">Quem irá receber</label>
                            <input type="text" id="name" />
                        </InputRow>
        
                        <InputRow>
                            <label htmlFor="address">Endereço</label>
                            <input type="text" id="address" />
                        </InputRow>
        
                        <InputRow>
                            <label htmlFor="city">Cidade</label>
                            <input type="text" id="city" />
                        </InputRow>
        
                        <InputRow>
                            <label htmlFor="cep">CEP</label>
                            <input type="number" id="cep" />
        
                            <label htmlFor="num">Número</label>
                            <input type="number" id="num" />
                        </InputRow>
        
                        <InputRow>
                            <label htmlFor="complemento">Complemento (opcional)</label>
                            <input type="text" id="complemento" />
                        </InputRow>
        
                        <Botao onClick={() => setOpenPayment(true)}>Continuar com o pagamento</Botao>
                        <Botao>Voltar para o carrinho</Botao>
                    </Form>
                </>
            )}
        </>
    )
}

export default Checkout