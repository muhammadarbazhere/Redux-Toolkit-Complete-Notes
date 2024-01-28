const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

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
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIcecreams--
        })
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions
