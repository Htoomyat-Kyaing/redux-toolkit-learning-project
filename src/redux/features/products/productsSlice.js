import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const url = 'https://fakestoreapi.com/products'

export const getProducts = createAsyncThunk(
  'products/getProducts', async () => {
    return fetch(url).then(res => res.json()).catch(error => console.log(error));
  }
)

const initialState = {
  products: [],
}

// Then, handle actions in your reducers:
const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, () => {
      console.log("loading")
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products.push(action.payload)
    })
    builder.addCase(getProducts.rejected, () => {
      console.log("loading failed")
    })
  },
})

export default productsSlice.reducer
