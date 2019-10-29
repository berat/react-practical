import { combineReducers } from 'redux';
import Axios from 'axios';

const initialState = {
    posts: [],
    owner: []
}

const loading = {
    load: true
}

const auth = {
    login: null,
    defaultComp: 0,
    authStatus: 0,
    username: null,
}

async function synchronous() {

    const result = await Axios(
        'https://practical-react-server.herokuapp.com/v1/post/',
    );
    initialState.posts = await result.data;
    loading.load = false;
} 
synchronous()
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDITEM':
            let newPosts = [...action.payload]
            return {
                ...state,
                posts: newPosts
            };
        case 'FULL':
            return synchronous();
        case 'CHECK':
            let newOwner = [...action.payload]
            return {
                ...state,
                owner: [...newOwner]
            }
        default:
            return state;
    }
}

const loadReducer = (state = loading, action) => {
    switch (action.type) {
        case 'DEGISTIR':
            return {
                ...state,
                load: !state.load
            }
        case 'FALSE':
            return {
                ...state,
                load: false,
            }
        default:
            return state
    }
}

const authReducer = (state = auth, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                login: action.payload
            }
        case 'COMPONENT':
            return {
                ...state,
                defaultComp: action.payload
            }
        case 'CURRENTUSER':
            return {
                ...state,
                username: action.payload
            }
        default:
            return state
    }
}


export const reducer = combineReducers({
    Reducer,
    loadReducer,
    authReducer
})