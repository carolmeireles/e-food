import { useState } from "react";
import { useDispatch } from "react-redux";

import { MenuList, MenuItem, Title, Desc, Modal, ModalContent } from "./styles";
import close from "../../assets/fechar.png";
import type { Cardapio, Restaurante } from "../../pages/Home";
import { add, open } from "../../store/reducers/cart";
import Button from "../Button";

interface ModalState extends Cardapio {
  invisible: boolean;
}

type Props = {
  restaurante: Restaurante;
};

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
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
      <MenuList>
        {pratos.map((prato) => (
          <li>
            <MenuItem>
              <img src={prato.foto} alt={prato.nome} />
              <Title>{prato.nome}</Title>
              <Desc>{getDesc(prato.descricao)}</Desc>
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
            </MenuItem>
          </li>
        ))}
      </MenuList>
      <Modal className={modal.invisible ? "invisible" : ""}>
        <ModalContent className="container">
          <header>
            <img
              src={close}
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
              Adicionar ao carrinho - {formataPreco(modal.preco)}
            </button>
          </div>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal();
          }}
        ></div>
      </Modal>
    </div>
  );
};

export default Menu;
