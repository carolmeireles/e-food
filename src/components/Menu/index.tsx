import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../Button";
import { add, open } from "../../store/reducers/cart";
import { formatPriceBrl } from "../../utils";

import closeIcon from "../../assets/fechar.png";
import * as S from "./styles";

interface ModalState extends Cardapio {
  invisible: boolean;
}

type Props = {
  restaurante: Restaurante;
};

const Menu = ({ restaurante }: Props) => {
  const pratos = restaurante.menu;

  const [modal, setModal] = useState<ModalState>({
    invisible: true,
    photo: "",
    price: 0,
    id: 0,
    name: "",
    description: "",
    portion: "",
  });

  const closeModal = () => {
    setModal({
      invisible: true,
      photo: "",
      price: 0,
      id: 0,
      name: "",
      description: "",
      portion: "",
    });
  };

  const getDesc = (desc: string) => {
    if (desc.length > 150) {
      return desc.slice(0, 147) + "...";
    }
    return desc;
  };

  const dispatch = useDispatch();
  const addCart = () => {
    dispatch(add(modal));
    dispatch(open());
    closeModal();
  };

  return (
    <div className="container">
      <S.MenuList>
        {pratos.map((prato) => (
          <li>
            <S.MenuItem>
              <img src={prato.photo} alt={prato.name} />
              <S.Title>{prato.name}</S.Title>
              <S.Desc>{getDesc(prato.description)}</S.Desc>
              <Button
                title="Clique aqui para adicionar o prato ao carrinho"
                type="button"
                onClick={() => {
                  setModal({
                    invisible: false,
                    photo: prato.photo,
                    price: prato.price,
                    id: prato.id,
                    name: prato.name,
                    description: prato.description,
                    portion: prato.portion,
                  });
                }}
              >
                Adicionar ao carrinho
              </Button>
            </S.MenuItem>
          </li>
        ))}
      </S.MenuList>
      <S.Modal className={modal.invisible ? "invisible" : ""}>
        <S.ModalContent className="container">
          <header>
            <img
              src={closeIcon}
              alt="Ícone de fechar"
              onClick={() => {
                closeModal();
              }}
            />
          </header>
          <img src={modal.photo} alt="Imagem do prato" />
          <div>
            <h4>{modal.name}</h4>
            <p>
              {modal.description}
              <br />
              <br />
              {modal.portion}
            </p>
            <button onClick={addCart}>
              Adicionar ao carrinho - {formatPriceBrl(modal.price)}
            </button>
          </div>
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal();
          }}
        ></div>
      </S.Modal>
    </div>
  );
};

export default Menu;
