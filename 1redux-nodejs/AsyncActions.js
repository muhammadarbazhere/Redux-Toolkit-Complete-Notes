
const redux = require('redux')
const createStore = redux.createStore


const initialState = {
    loeding: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'


const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    }
}
const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payloed: users,
    }
}
const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payloed: error,
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUESTED:
            return {
                ...state, 
               loeding: true,
                    }
                 
         case FETCH_USERS_SUCCEEDED:
            return {
                loeding: false,
                users: action.payloed,
                error: '',
                    }
                    
         case FETCH_USERS_SUCCEEDED:
            return {
                loeding: false,
                users: [],
                error: action.payloed,
                    }             

            default:
                return state
    }
}


const store = createStore(reducer)