
const stateInit = {
    data: [],
    currentPost: {},
    movAllFromCat: []
}

const posts = (state = stateInit, action) => {

    switch (action.type) {
        case "GET_POSTS":

            const data = action.posts;

            return {
                ...state,
                data
            };

        case "GET_POST_BY_ID":

            return {
                ...state,
                currentPost: action.currentPost
            };

        case "GET_MOV_ALL_FROM_CAT":

            return {
                ...state,
                movAllFromCat: action.allFilms
            };

        case "GET_POST_BY_ID_FROM_SLIDER":

            return {
                ...state,
                currentPost: action.currentPost
            };

        default:

            return {
                ...state
            };
    }

}

export default posts;
