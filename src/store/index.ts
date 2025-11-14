import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart";
import checkoutReducer from "./reducers/checkout";
import api from "../services/api";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
    checkout: checkoutReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootReducer = ReturnType<typeof store.getState>;
