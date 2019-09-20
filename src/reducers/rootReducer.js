const initialState = {
    posts: [],
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EKLE':
            let newPosts = [...state.posts, action.payload]
            return {
                ...state,
                posts: newPosts
            };
        case 'SIL':
            return { counter: state.counter - 1 };
        default:
            return state;
    }
}

export default Reducer;