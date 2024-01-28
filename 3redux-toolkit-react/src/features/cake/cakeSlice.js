import { createSlice } from '@reduxjs/toolkit'

const initialCakeState = {
    numOfCakes : 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState: initialCakeState,
    reducers:{

    ordered: (state) => {
            state.numOfCakes--
        },
    reStocked: (state, action) => {//to add extraReducer coment loger midleware 
            state.numOfCakes += action.payload
        }

    }
})

export default cakeSlice.reducer
export const { ordered, reStocked } = cakeSlice.actions
