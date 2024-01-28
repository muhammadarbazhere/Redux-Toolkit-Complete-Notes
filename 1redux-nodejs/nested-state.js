const redux = require('redux')


const initialState = {

    mame: 'Vishwas',
    address: {
        street: '123 Main St',
        city: 'Bostan',
        state: 'MA',
    }

}

const STREET_UPDATED = 'STREET_UPDATED'
const updatedStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case STREET_UPDATED:
            return {
                ...state,
                address: {
                    ...state.address,
                    street: action.payload,
                }
                    }
            default:
                return state
    }
}


const store = redux.createStore(reducer)
      console.log('initial state', store.getState())

        const unSubscribe = store.subscribe( () => {
        console.log('updated state',store.getState())}
        )

store.dispatch(updatedStreet('456 Main St'))
unSubscribe()        
