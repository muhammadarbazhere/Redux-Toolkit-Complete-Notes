const createSlice = require('@reduxjs/toolkit').createSlice

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

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
