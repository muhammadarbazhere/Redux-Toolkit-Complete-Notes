// copy all from AsyncActions.js
// now
// npm i axios redux-thunk


const redux = require('redux');
const createStore = redux.createStore; // Correct function name

const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');


const initialState = {
    loading: false,
    users: [],
    error: ''
};

// Action types
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

// Action creators
const fetchUsersRequest = () => ({
    type: FETCH_USERS_REQUESTED,
});

const fetchUsersSuccess = (users) => ({
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
});

const fetchUsersFailure = (error) => ({
    type: FETCH_USERS_FAILED,
    payload: error,
});

// Reducer
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USERS_SUCCEEDED:
            return {
                loading: false,
                users: action.payload,
                error: '',
            };
        case FETCH_USERS_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

// Thunk action creator
const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest());

       return axios.get('https://jsonplaceholder.typicode.com/users')

            .then((response) => {
                const users = response.data.map((user) => user.id);
                dispatch(fetchUsersSuccess(users));
            })

            .catch((error) => {
                dispatch(fetchUsersFailure(error.message));
            });
    };
};



// // Action creator using Redux Thunk  by fetch
// const fetchUsers = () => {
//   return (dispatch) => {
//     dispatch(fetchUsersRequest());
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => dispatch(fetchDataSuccess(data)))
//       .catch(error => dispatch(fetchUsersFailure(error)));
//   };
// };


// Create Redux store with middleware
const store = createStore(Reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => { console.log(store.getState());  });

store.dispatch(fetchUsers());
