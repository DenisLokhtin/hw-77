import {AUTHOR_CHANGE, TEXT_CHANGE, POSTS_SET, IMAGE_SET} from "./action";

const initialState = {
    posts: [],
    post: {author: '', message: '', file: null, filename: '',},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHOR_CHANGE:
            return {...state, post: {...state.post, author: action.payload}};
        case TEXT_CHANGE:
            return {...state, post: {...state.post, message: action.payload}};
        case POSTS_SET:
            return {
                ...state,
                posts: [...state.posts, ...action.payload]
            };
        case IMAGE_SET:
            return {...state, post: {...state.post, filename: action.payload.name, file: action.payload.file}};


        default:
            return state;
    }
}


    export default reducer;