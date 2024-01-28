const configureStore = require('@reduxjs/toolkit').configureStore

//add logger to remove console.log statement from subscribe method in index.js
//const reduxLogger = require('redux-logger')
//const logger = reduxLogger.createLogger()
//

const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')
const userReducer = require('../features/user/userSlice')

const store = configureStore({

    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,   ////
    },
    //
// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    //     

})

module.exports = store