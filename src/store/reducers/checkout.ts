import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: false,
    reducers: {
        openCheckout: (state) => {
            state = true
        },
        closeCheckout: (state) => {
            state = false
        }
    }
})

export const {openCheckout, closeCheckout} = checkoutSlice.actions
export default checkoutSlice.reducer