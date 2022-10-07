import { createSlice } from "@reduxjs/toolkit";

const initialState={
    itemNumber:0,
    numOfItems:0,
    price:0,
    id:[],
    orders:[]
}

const cartSlice=createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addToCart:(state,action)=>{
                state.numOfItems+=1
                state.price+=action.payload.price
                state.id.push(action.payload.bookNumber)
        },
        placeOrder:(state,action)=>{
            state.orders=[...state.orders,...state.id]
            state.id=[]
            state.price=0
            state.numOfItems=0
        }
    }
})

export default cartSlice.reducer;
export const { addToCart,placeOrder }=cartSlice.actions;