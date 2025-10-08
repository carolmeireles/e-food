import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Restaurante } from "../pages/Home"

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api-ebac.vercel.app/api/efood'
    }),
    endpoints: (builder) => ({
        getRestaurante: builder.query<Restaurante, string>({
            query: (id) => `restaurantes/${id}`
        }),
        getListaRestaurantes: builder.query<Restaurante[], void>({
            query: () => 'restaurantes'
        })
    })
})

export const { useGetRestauranteQuery, useGetListaRestaurantesQuery } = api
export default api