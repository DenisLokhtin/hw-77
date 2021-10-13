import {AUTHOR_CHANGE, TEXT_CHANGE, POSTS_SET} from "./action";

const initialState = {
    authorMessage: '',
    textMessage: '',
    posts: [],
    image: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHOR_CHANGE:
            return {...state, authorMessage: action.payload};
        case TEXT_CHANGE:
            return {...state, textMessage: action.payload};
        case POSTS_SET:
            return {
                ...state,
                posts: [...state.posts, ...action.payload]
            };

        default:
            return state;
    }
}


export default reducer;