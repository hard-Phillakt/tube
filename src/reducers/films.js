
const stateInit = {
    filmsAllFromAllGenres: [],
    filmsCurrent: {},
    filmsList: [],
}

const films = (state = stateInit, action) => {

    switch (action.type) {
        case "GET_FILMS":

            const filmsAllFromAllGenres = action.films;

            return {
                ...state,
                filmsAllFromAllGenres
            };

        default:

            return {
                ...state
            };
    }

}

export default films;
