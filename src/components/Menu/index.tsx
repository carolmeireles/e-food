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
  const pratos = restaurante.cardapio;

  const [modal, setModal] = useState<ModalState>({
    invisible: true,
    foto: "",
    preco: 0,
    id: 0,
    nome: "",
    descricao: "",
    porcao: "",
  });

  const closeModal = () => {
    setModal({
      invisible: true,
      foto: "",
      preco: 0,
      id: 0,
      nome: "",
      descricao: "",
      porcao: "",
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
              <img src={prato.foto} alt={prato.nome} />
              <S.Title>{prato.nome}</S.Title>
              <S.Desc>{getDesc(prato.descricao)}</S.Desc>
              <Button
                title="Clique aqui para adicionar o prato ao carrinho"
                type="button"
                onClick={() => {
                  setModal({
                    invisible: false,
                    foto: prato.foto,
                    preco: prato.preco,
                    id: prato.id,
                    nome: prato.nome,
                    descricao: prato.descricao,
                    porcao: prato.porcao,
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
          <img src={modal.foto} alt="Imagem do prato" />
          <div>
            <h4>{modal.nome}</h4>
            <p>
              {modal.descricao}
              <br />
              <br />
              {modal.porcao}
            </p>
            <button onClick={addCart}>
              Adicionar ao carrinho - {formatPriceBrl(modal.preco)}
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
