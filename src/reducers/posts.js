
const stateInit = {
    data: []
}

const posts = (state = stateInit, action) => {

    switch (action.type) {
        case "GET_POSTS":

            const data = action.posts;

            return {
                ...state,
                data
            };

        default:
            return {
                ...state
            };
    }

}

export default posts;
