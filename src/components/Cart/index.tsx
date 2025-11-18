import {
  CartContainer,
  Overlay,
  Sidebar,
  CartItem,
  Excluir,
  Total,
} from "./styles";
import excluir from "../../assets/excluir.png";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/cart";
import { openCheckout } from "../../store/reducers/checkout";
import Button from "../Button";
import { formatPriceBrl, getTotalPrice } from "../../utils";

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const abrirCheckout = () => {
    dispatch(close());
    dispatch(openCheckout());
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  if (items.length === 0) {
    return (
      <>
        <CartContainer className={isOpen ? "is-open" : ""}>
          <Overlay onClick={closeCart} />
          <Sidebar>
            <p>
              O carrinho está vazio. Adicione pelo menos um prato para
              continuar.
            </p>
          </Sidebar>
        </CartContainer>
      </>
    );
  }

  return (
    <CartContainer className={isOpen ? "is-open" : ""}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <>
          <ul>
            {items.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{formatPriceBrl(item.preco)}</span>
                </div>
                <Excluir src={excluir} onClick={() => removeItem(item.id)} />
              </CartItem>
            ))}
          </ul>
          <Total>
            Valor total
            <span>{formatPriceBrl(getTotalPrice(items))}</span>
          </Total>
          <Button
            onClick={abrirCheckout}
            type="button"
            title="Clique aqui para continuar com a entrega"
          >
            Continuar com a entrega
          </Button>
        </>
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
