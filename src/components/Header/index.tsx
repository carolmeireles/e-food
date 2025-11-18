import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootReducer } from "../../store";
import { open } from "../../store/reducers/cart";

import background from "../../assets/fundo2.png";
import logo from "../../assets/logo.png";
import { HeaderStyle } from "./styles";

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const openCart = () => {
    dispatch(open());
  };

  return (
    <HeaderStyle style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <Link to="/">Restaurantes</Link>
        <Link to="/">
          <img src={logo} alt="efood" />
        </Link>
        <button onClick={openCart}>
          {items.length} produto(s) no carrinho
        </button>
      </div>
    </HeaderStyle>
  );
};

export default Header;
