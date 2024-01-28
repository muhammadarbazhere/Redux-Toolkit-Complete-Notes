// action , single reducer, store


const redux = require('redux')
const createStore = redux.createStore


const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

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



              // reducer
                    // (previousState, action) => newState

const initialState = {
    numOfCakes: 10,
}
const reducer = (state = initialState, action) => {
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


// redux store

const store = createStore(reducer)
console.log('initial state', store.getState())

const unSubscribe = store.subscribe( () => {
        console.log('updated state',store.getState())}
)

//store.dispatch({ type: CAKE_ORDERED, payload: orderCake() })  
//store.dispatch({type:CAKE_RESTOCKED, payload: restockCake()})//produces error 

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

store.dispatch(reStockCake(3));
   

unSubscribe() 