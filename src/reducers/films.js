
const stateInit = {
    filmsAll: [],
    filmsAllFromAllGenres: [],
    filmsCurrent: {},
    filmsFromIdGenre: [],
    filterFilmsFromGenresHome: [],
    btnViewPlay: true
}

const films = (state = stateInit, action) => {

    switch (action.type) {

        case "GET_FILMS_ALL":

            const filmsAll = action.filmsAll;

            return {
                ...state,
                filmsAll
            };

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



        // Фильтр по жанрам на главной
        case "GET_FILTER_FILMS_FROM_GENRES":

            const filterFilmsFromGenresHome = action.filterFilmsFromGenresHome;

            return {
                ...state,
                filterFilmsFromGenresHome
            };








            

        default:

            return {
                ...state
            };
    }

}

export default films;
