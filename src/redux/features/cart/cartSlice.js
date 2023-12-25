import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	amount: 0,
	total: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		clearCart(state) {
			state.amount = 0
			state.total = 0
		},
		addToCart(state,{payload}){
			state.amount++
			state.total += payload
		}
	}
})

export const {addToCart,clearCart} = cartSlice.actions

export default cartSlice.reducer;
