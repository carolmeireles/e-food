import { Titulo, Form, Row, InputGroup } from "./styles";
import { Botao } from "../Menu/styles";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePurchaseMutation } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { formataPreco } from "../Menu";
import { CartContainer, Overlay, Sidebar } from "../Cart/styles";
//import InputMask from 'react-input-mask'
import { closeCheckout } from "../../store/reducers/checkout";
import { open } from "../../store/reducers/cart";

const Checkout = () => {
  const {isOpen} = useSelector((state: RootReducer) => state.checkout)
  const { items } = useSelector((state: RootReducer) => state.cart);
  const [openDelivery, setOpenDelivery] = useState(true);
  const [purchase] = usePurchaseMutation();
  const dispatch = useDispatch()

  const goToCart = () => {
    dispatch(closeCheckout())
    dispatch(open())
  }

  const fecharCheckout = () => {
    dispatch(closeCheckout())
  }

  const form = useFormik({
    initialValues: {
      name: "",
      address: "",
      city: "",
      cep: "",
      num: "",
      complemento: "",
      cardName: "",
      cardNumber: "",
      cardCode: "",
      expiresMonth: "",
      expiresYear: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Mínimo de 5 caracteres")
        .required("Campo obrigatório"),
      address: Yup.string().required("Digite seu endereço"),
      city: Yup.string().required("Digite sua cidade"),
      cep: Yup.string()
        .min(9, "O campo precisa de 9 caracteres")
        .max(9, "O campo precisa de 9 caracteres")
        .required("Digite sua cidade"),
      num: Yup.string().required("Campo obrigatório"),
      complemento: Yup.string().required("Campo obrigatório"),
      cardName: Yup.string().required("Campo obrigatório"),
      cardNumber: Yup.string().required("Campo obrigatório"),
      cardCode: Yup.string().required("Campo obrigatório"),
      expiresMonth: Yup.string().required("Campo obrigatório"),
      expiresYear: Yup.string().required("Campo obrigatório"),
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.num),
            complement: values.complemento,
          },
          payment: {
            card: {
              name: values.cardName,
              number: values.cardNumber,
              code: Number(values.cardCode),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear)
              },
            },
          },
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
      });
    },
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
        return(acumulador += valorAtual.preco!)
    }, 0)   
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={fecharCheckout} />
      <Sidebar>
        <Form onSubmit={form.handleSubmit}>
          <Titulo>
            {openDelivery ? "Entrega" : "Pagamento"}
            <span className={openDelivery ? "display-none" : ""}>
              {" "}
              - Valor a pagar {formataPreco(getTotalPrice())}
            </span>
          </Titulo>

          {openDelivery ? (
            <>
              <Row>
                <InputGroup>
                  <label htmlFor="name">Quem irá receber</label>
                  <input
                    type="text"
                    id="name"
                    value={form.values.name}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("name") ? "error" : ""}
                  />
                </InputGroup>
              </Row>

              <Row>
                <InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    id="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("address") ? "error" : ""}
                  />
                </InputGroup>
              </Row>

              <Row>
                <InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("city") ? "error" : ""}
                  />
                </InputGroup>
              </Row>

              <Row>
                <InputGroup maxWidth="155px">
                  <label htmlFor="cep">CEP</label>
                  <input
                    type="text"
                    id="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("cep") ? "error" : ""}
                    //mask="99999-999"
                  />
                </InputGroup>

                <InputGroup maxWidth="155px">
                  <label htmlFor="num">Número</label>
                  <input
                    type="text"
                    id="num"
                    value={form.values.num}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("num") ? "error" : ""}
                  />
                </InputGroup>
              </Row>

              <Row>
                <InputGroup>
                  <label htmlFor="complemento">Complemento (opcional)</label>
                  <input
                    type="text"
                    id="complemento"
                    value={form.values.complemento}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("complemento") ? "error" : ""}
                  />
                </InputGroup>
              </Row>

              <Botao onClick={() => setOpenDelivery(false)} className="margin-top">
                Continuar com o pagamento
              </Botao>
              <Botao onClick={goToCart}>Voltar para o carrinho</Botao>
          </>
          ) : (
            <>
              <Row>
                <InputGroup>
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input
                    type="text"
                    id="cardName"
                    value={form.values.cardName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("cardName") ? "error" : ""}
                  />
                </InputGroup>
              </Row>

              <Row>
                <InputGroup maxWidth="228px">
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("cardNumber") ? "error" : ""}
                    //mask="9999 9999 9999 9999"
                  />
                </InputGroup>

                <InputGroup maxWidth="87px">
                  <label htmlFor="cardCode">CVV</label>
                  <input
                    type="text"
                    id="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("cardNumber") ? "error" : ""}
                    //mask="9999"
                  />
                </InputGroup>
              </Row>

              <Row>
                <InputGroup maxWidth="155px">
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <input
                    type="text"
                    id="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("expiresMonth") ? "error" : ""}
                    //mask="99"
                  />
                </InputGroup>

                <InputGroup maxWidth="155px">
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input
                    type="text"
                    id="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("expiresYear") ? "error" : ""}
                    //="99"
                  />
                </InputGroup>
              </Row>

              <Botao
                type="submit"
                className="margin-top"
                onClick={form.handleSubmit}
              >
                Finalizar pagamento
              </Botao>
              <Botao onClick={() => setOpenDelivery(true)}>
                Voltar para a edição de endereço
              </Botao>
            </>
          )}
        </Form>
      </Sidebar>
    </CartContainer>
  );
};

export default Checkout;
