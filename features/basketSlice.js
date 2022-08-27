import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.value += [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      state.value -= [...state.items, action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items

export default basketSlice.reducer
