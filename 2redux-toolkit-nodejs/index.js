// cd Redux-ToolKit
//  npm i @reduxjs/toolkit

// create app folder and a file store.js in the app folder

// create a folder features and make 2 folders cake & iceCream init

// cakeSlice.js in cake folder
// then add the cakeSlice.js to store.js
// then matter comes to index.js

// now make user folder in features and userSlice.js in user for async Actions



const store = require('./app/store')

const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('initial state', store.getState())

const unSubscribe = store.subscribe(() => {
    console.log('updated state', store.getState())
})

store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered())    
// store.dispatch(cakeActions.ordered()) 
// store.dispatch(cakeActions.ordered()) 
// store.dispatch(cakeActions.reStocked(3))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.reStocked(2))

// unSubscribe()