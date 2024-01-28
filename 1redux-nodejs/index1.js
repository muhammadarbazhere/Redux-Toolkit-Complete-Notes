// action , multiple reducers, store


const redux = require('redux')
const createStore = redux.createStore

const combineReducers = redux.combineReducers



const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICEXREAM_RESTOCKED'


function orderCake () {
    return {     // action
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


function orderIcream(qty = 1) {
    return {     
        type: ICECREAM_ORDERED,
        payload: qty,  
        }
}
function reStockIceCream(qty = 1) {
    return {     
        type: ICECREAM_RESTOCKED,
        payload: qty,  
        }
}




              // reducer
                    // (previousState, action) => newState

const initialCakeState = {
    numOfCakes: 10,
}
const initialIceCreamState = {
    numOfIceCreams: 20,
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,  // make copy and update only cakes property
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case ICECREAM_ORDERED:
            return {
                ...state,  // make copy and update only cakes property
                numOfIceCreams : state.numOfIceCreams-1
                    }
                 
         case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams : state. numOfIceCreams + action.payload
                    }  

            default:
                return state
    }
}




// redux store

const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream: iceCreamReducer
})






const store = createStore(rootReducer)
console.log('initial state', store.getState())

const unSubscribe = store.subscribe( () => {
        console.log('updated state',store.getState())
    }
)

//store.dispatch({ type: CAKE_ORDERED, payload: orderCake() })  
//store.dispatch({type:CAKE_RESTOCKED, payload: restockCake()})//produces error 

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

store.dispatch(reStockCake(3));
   


store.dispatch(orderIcream());
store.dispatch(orderIcream());

store.dispatch(reStockIceCream(2));


unSubscribe() 