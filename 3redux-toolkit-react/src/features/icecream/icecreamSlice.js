import { createSlice } from '@reduxjs/toolkit'

import { ordered as cakeOrdered } from '../cake/cakeSlice'

const initialIcecreamState = {
    numOfIcecreams : 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState: initialIcecreamState,
    reducers:{

        ordered: (state) => {
            state.numOfIcecreams--
        },
        reStocked: (state, action) => {
            state.numOfIcecreams += action.payload
        }

    },

    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIcecreams--
        })
    }
})

export default icecreamSlice.reducer
export const { ordered, reStocked } = icecreamSlice.actions
