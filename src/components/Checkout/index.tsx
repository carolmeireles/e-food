import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { IMaskInput } from "react-imask";

import { Titulo, Row, InputGroup } from "./styles";
import { Botao } from "../Menu/styles";
import { usePurchaseMutation } from "../../services/api";
import { RootReducer } from "../../store";
import { formataPreco } from "../Menu";
import { CartContainer, Overlay, Sidebar } from "../Cart/styles";
import { closeCheckout } from "../../store/reducers/checkout";
import { clear, open } from "../../store/reducers/cart";
import Button from "../Button";

const Checkout = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.checkout);
  const { items } = useSelector((state: RootReducer) => state.cart);
  const [openPayment, setOpenPayment] = useState(false);
  const [purchase, { data, isSuccess }] = usePurchaseMutation();
  const dispatch = useDispatch();

  const fecharCheckout = () => {
    dispatch(closeCheckout());
  };

  const goToCart = () => {
    dispatch(closeCheckout());
    dispatch(open());
  };

  const finalizarPedido = () => {
    dispatch(clear());
    dispatch(closeCheckout());
  };

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
      complemento: Yup.string(),

      cardName: Yup.string().when((values, schema) =>
        openPayment ? schema.required('Campo obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        openPayment ? schema.required('Campo obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        openPayment ? schema.required('Campo obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        openPayment ? schema.required('Campo obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        openPayment ? schema.required('Campo obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number,
        })),
        delivery: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.num),
            complement: values.complemento,
          },
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear),
            },
          },
        }
      });
    },
  });

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched;
    const isInvalid = fieldName in form.errors;
    const hasError = isTouched && isInvalid;

    return hasError;
  };

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!);
    }, 0);
  };

  if (isSuccess && data) {
    return (
      <>
        <CartContainer className={isOpen ? "is-open" : ""}>
          <Overlay onClick={fecharCheckout} />
          <Sidebar>
            <h3>
              Pedido realizado
              <span> - {data.orderId}</span>
            </h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Botao onClick={finalizarPedido}>Concluir</Botao>
          </Sidebar>
        </CartContainer>
      </>
    );
  }

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={fecharCheckout} />
      <Sidebar>
        <form onSubmit={form.handleSubmit}>
          <Titulo>
            {openPayment ? "Pagamento" : "Entrega"}
            <span className={openPayment ? "" : "display-none"}>
              {" "}
              - Valor a pagar {formataPreco(getTotalPrice())}
            </span>
          </Titulo>

          {openPayment ? (
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
                  <IMaskInput
                    type="text"
                    id="cardNumber"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("cardNumber") ? "error" : ""}
                    mask="0000 0000 0000 0000"
                  />
                </InputGroup>

                <InputGroup maxWidth="87px">
                  <label htmlFor="cardCode">CVV</label>
                  <IMaskInput
                    type="text"
                    id="cardCode"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("cardNumber") ? "error" : ""}
                    mask="000"
                  />
                </InputGroup>
              </Row>

              <Row>
                <InputGroup maxWidth="155px">
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <IMaskInput
                    type="text"
                    id="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("expiresMonth") ? "error" : ""}
                    mask="00"
                  />
                </InputGroup>

                <InputGroup maxWidth="155px">
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <IMaskInput
                    type="text"
                    id="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("expiresYear") ? "error" : ""}
                    mask="0000"
                  />
                </InputGroup>
              </Row>

              <Button
                type="submit"
                className="margin-top"
                onClick={form.handleSubmit}
              >
                Finalizar pagamento
              </Button>
              <Button onClick={() => setOpenPayment(false)} type="reset">
                Voltar para a edição de endereço
              </Button>
            </>
          ) : (
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
                  <IMaskInput
                    type="text"
                    id="cep"
                    value={form.values.cep}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("cep") ? "error" : ""}
                    mask="00000-000"
                    placeholder="00000-000"
                  />
                </InputGroup>

                <InputGroup maxWidth="155px">
                  <label htmlFor="num">Número</label>
                  <IMaskInput
                    type="text"
                    id="num"
                    value={form.values.num}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError("num") ? "error" : ""}
                    mask="00"
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

              <Button
                onClick={() => setOpenPayment(true)}
                className="margin-top"
                type="button"
              >
                Continuar com o pagamento
              </Button>
              <Button onClick={goToCart} type="reset">Voltar para o carrinho</Button>
            </>
          )}
        </form>
      </Sidebar>
    </CartContainer>
  );
};

export default Checkout;
