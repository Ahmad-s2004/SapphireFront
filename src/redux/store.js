import { configureStore } from '@reduxjs/toolkit'

import cartData from './reduxSlice'

const store = configureStore({
    reducer:{
        allDetail : cartData
    }
})

export default store;

