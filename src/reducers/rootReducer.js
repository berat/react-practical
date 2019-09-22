import { combineReducers } from 'redux';

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
    authStatus: 0
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EKLE':
            let newPosts = [...state.posts, ...action.payload]
            return {
                ...state,
                posts: newPosts

            };
        case 'KONTROL':
            let newOwner = [...state.owner, ...action.payload]
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
        default:
            return state
    }
}

const authReducer = (state = auth, action) => {
    switch(action.type){
        case 'LOGINOL':
            return {
                ...state,
                login: action.payload
            }
        case 'COMPONENT':
            return{
                ...state,
                defaultComp: action.payload
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