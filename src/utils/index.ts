import { Cardapio } from "../pages/Home";

export const formatPriceBrl = (preco = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);
};

export const getTotalPrice = (items: Cardapio[]) => {
    return items.reduce((acumulator, amount) => {
      return (acumulator += amount.preco!);
    }, 0);
};