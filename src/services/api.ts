import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Restaurante } from "../pages/Home";

type Product = {
  id: number;
  price: number;
};

type PurchasePayload = {
  products: Product[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};

type PurchaseResponse = {
  orderId: string;
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-ebac.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getRestaurante: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    getListaRestaurantes: builder.query<Restaurante[], void>({
      query: () => "restaurantes",
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: "checkout",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetRestauranteQuery,
  useGetListaRestaurantesQuery,
  usePurchaseMutation,
} = api;
export default api;
