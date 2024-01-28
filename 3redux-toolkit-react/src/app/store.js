import { configureStore } from '@reduxjs/toolkit'

//add logger to remove console.log statement from subscribe method in index.js
//const reduxLogger = require('redux-logger')
//const logger = reduxLogger.createLogger()
//

import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'

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

export default store