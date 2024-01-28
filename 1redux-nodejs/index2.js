// applying the Middleware
// npm i redux-logger 


const redux = require('redux')
const createStore = redux.createStore

const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()


const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

function orderCake () {
    return {   
        type: CAKE_ORDERED,
        payload: 1,  
        }
}
function reStockCake(qty = 1) {
    return {     
        type: CAKE_RESTOCKED,
        payload: qty,  
        }
}



const initialState = {
    numOfCakes: 10,
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes : state.numOfCakes-1
                    }
                 
         case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes : state.numOfCakes + action.payload
                    }  

            default:
                return state
    }
}


const store = createStore(reducer, applyMiddleware(logger))
console.log('initial state', store.getState())

// const unSubscribe = store.subscribe( () => {
//         console.log('updated state',store.getState())})
const unSubscribe = store.subscribe( () => {})

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

store.dispatch(reStockCake(3));
   

unSubscribe() 