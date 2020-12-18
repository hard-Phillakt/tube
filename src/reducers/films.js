
const stateInit = {
    filmsAllFromAllGenres: [],
    filmsCurrent: {},
    filmsFromIdGenre: [],
    btnViewPlay: true
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


        case "GET_ALL_FILMS_FROM_ID_GENRE":

            return {
                ...state,
                filmsFromIdGenre: action.filmsFromIdGenre
            };


        case "GET_FILM_BY_ID_FROM_SLIDER":

            return {
                ...state,
                filmsCurrent: action.currentFilm
            };


        case "STATE_BTN_PLAY":

            return {
                ...state,
                btnViewPlay: action.stateBnt
            };

        default:

            return {
                ...state
            };
    }

}

export default films;
