import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countProdust:0,
  price : 0
};
const CartSlice = createSlice({
  name: "cartCount",
  initialState,
  reducers: {
    increment:(state , action)=>{
      state.countProdust +=1 ;
      state.price += action.payload
    },
    decrement:(state ,action)=>{
        state.countProdust -=1 ;
        state.price += action.payload
    }
  },
});

export const {
    increment ,
    decrement
} = CartSlice.actions;
export default CartSlice.reducer;
