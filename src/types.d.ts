declare interface Cardapio {
  photo: string;
  price: number;
  id: number;
  name: string;
  description: string;
  portion: string;
}

declare type Restaurante = {
  id: number;
  title: string;
  featured: boolean;
  type: string;
  rating: number;
  description: string;
  cover: string;
  menu: Cardapio[];
}