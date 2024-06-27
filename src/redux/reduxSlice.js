import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
    value: false
}

const cartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{


            const itemIndex = state.carts.findIndex(ele=>ele._id === action.payload._id)
            if(itemIndex>=0){
                state.carts[itemIndex].__v +=1;
                console.log(state.carts[itemIndex])
            }else{
                let temp = {...action.payload, __v: 1};
                state.carts = [...state.carts, temp]
            }

        },
        removeToCart:(state,action)=>{
            let data = state.carts.filter(item=> item._id !== action.payload)
            state.carts = data;
        },

        removeSingleItem:(state,action)=>{
            const decrement = state.carts.findIndex(ele => ele._id === action.payload._id)
            
            if(state.carts[decrement].__v>=1){
                state.carts[decrement].__v -= 1;
            }

        },
        emptyCart:(state,action)=>{
            state.carts = []
        },
        toggle: (state)=>{
            state.value = !state.value
        }
    }
})

export const {addToCart, removeToCart, removeSingleItem, emptyCart, toggle} = cartSlice.actions;
export default cartSlice.reducer;