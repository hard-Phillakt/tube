
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

        case "GET_FILM_BY_ID":

            return {
                ...state,
                filmsCurrent: action.currentFilm
            };

        default:

            return {
                ...state
            };
    }

}

export default films;
