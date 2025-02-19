import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    isLoggedIn: false,
    
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,

    reducers: {
        increment: (state) => {

            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        updateIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        },
        
    },
})

export const { increment, decrement, incrementByAmount ,updateIsLoggedIn} = counterSlice.actions

export default counterSlice.reducer