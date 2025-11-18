import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import Button from "../Button";

import { close, remove } from "../../store/reducers/cart";
import { openCheckout } from "../../store/reducers/checkout";
import { formatPriceBrl, getTotalPrice } from "../../utils";

import trashIcon from "../../assets/excluir.png";
import * as S from "./styles";

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
        <S.CartContainer className={isOpen ? "is-open" : ""}>
          <S.Overlay onClick={closeCart} />
          <S.Sidebar>
            <p>
              O carrinho está vazio. Adicione pelo menos um prato para
              continuar.
            </p>
          </S.Sidebar>
        </S.CartContainer>
      </>
    );
  }

  return (
    <S.CartContainer className={isOpen ? "is-open" : ""}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <>
          <ul>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{formatPriceBrl(item.preco)}</span>
                </div>
                <S.Delete src={trashIcon} onClick={() => removeItem(item.id)} />
              </S.CartItem>
            ))}
          </ul>
          <S.Total>
            Valor total
            <span>{formatPriceBrl(getTotalPrice(items))}</span>
          </S.Total>
          <Button
            onClick={abrirCheckout}
            type="button"
            title="Clique aqui para continuar com a entrega"
          >
            Continuar com a entrega
          </Button>
        </>
      </S.Sidebar>
    </S.CartContainer>
  );
};

export default Cart;
