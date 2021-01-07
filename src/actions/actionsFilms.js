// import timer from '../components/_timer/timer';
let _ = require('lodash');


// 1.
//  Получить категории с фильмами
const getFilmsAction = (films) => {
    return {
        type: 'GET_FILMS',
        films
    }
}

export const getAsyncFilms = (param, count) => {

    return (dispatch) =>
        fetch('http://tube-serv/api/v1/films-genres?expand=films_to_genres')
            .then(response => response.json())
            .then(json => {
                if (json) {

                    // Рандомная сортировка массива 
                    json.items.forEach((item, i) => {
                        if(item.films_to_genres.length){
                            item.films_to_genres = _.shuffle(item.films_to_genres);
                        }
                    });

                    if (json.items.length) {
                        dispatch(getFilmsAction(json.items));
                    } else {
                        dispatch(getFilmsAction(json.items.items = false));
                    }
                }
            });
}


// 2.
//  Получить фильм по id
const getFilmbyIdAction = (currentFilm) => {
    return {
        type: 'GET_FILM_BY_ID',
        currentFilm
    }
}

export const getAsyncFilmbyIdAction = (params) => {

    return (dispatch) =>
        fetch(`http://tube-serv/api/v1/films/${params.id_films}`)
            .then(response => response.json())
            .then(json => {
                if (json.slug === params.slug) {
                    dispatch(getFilmbyIdAction(json));
                }
            });
}


// 3.
//  Получить все фильмы из категории без текущего фильма в слайдер
const getAllFilmsFromGenreAction = (filmsFromIdGenre) => {
    return {
        type: 'GET_ALL_FILMS_FROM_ID_GENRE',
        filmsFromIdGenre
    }
}

export const getAsyncAllFilmsFromGenreAction = (params) => {

    // {id_genre: "3", genre: "boevik", id_films: "1", slug: "varkraft"}

    return (dispatch) =>
        fetch(`http://tube-serv/api/v1/films-genres/${params.id_genre}?expand=films_to_genres`)
            .then(response => response.json())
            .then(json => {

                let filmsFromIdGenre = [];

                json.films_to_genres.find((item, i) => {
                    if (parseInt(item.id) !== parseInt(params.id_films)) {
                        filmsFromIdGenre.push(item);
                    }
                });

                dispatch(getAllFilmsFromGenreAction(filmsFromIdGenre));

                // json.films_to_genres.forEach((item, i) => {

                //     // if (cat.slug === params.cat) {
                //     //     let allFilms = [];

                //     //     cat.films.find((item) => {
                //     //         if (item.id !== parseInt(params.id)) {
                //     //             allFilms.push(item);
                //     //         }
                //     //     })

                //     //     dispatch(getAllFilmsFromGenreAction(allFilms));
                //     // }

                // });

            });
}


// 4.
//  Получить фильм по id из слайдера
const getFilmByIdFromSliderAction = (currentFilm) => {
    return {
        type: 'GET_FILM_BY_ID_FROM_SLIDER',
        currentFilm
    }
}

export const getAsyncFilmByIdFromSliderAction = (id) => {
    return (dispatch) => {
        fetch(`http://tube-serv/api/v1/films/${id}`)
            .then(response => response.json())
            .then(json => {

                if (json.id === id) {
                    dispatch(getFilmByIdFromSliderAction(json));
                }
            });
    }
}


// 5.
// Состояние кнопки Play при переключении фильмов
export const getStateBntPlay = (stateBnt) => {
    return {
        type: 'STATE_BTN_PLAY',
        stateBnt
    }
}


// 6.
// Передаем параметры для отображения Popover окна с краткими данными по фильму на главной по "Премьерам"
export const getStatePopoverViewPremiere = (popoverViewPremiere) => {
    return {
        type: 'STATE_POPOVER_PREMIERE_VIEW',
        popoverViewPremiere
    }
}

// 7.
// Передаем параметры для отображения Popover окна с краткими данными по фильму на главной по "Фильтрам"
export const getStatePopoverViewFilter = (popoverViewFilter) => {
    return {
        type: 'STATE_POPOVER_FILTER_VIEW',
        popoverViewFilter
    }
}

// 8.
// Передаем параметры для отображения Popover окна с краткими данными по фильму на главной по "Фильтрам"
export const getStatePopoverViewFilmGenre = (popoverViewFilmGenre) => {
    return {
        type: 'STATE_POPOVER_FILM_GENRE_VIEW',
        popoverViewFilmGenre
    }
}

// 9.
// Передаем параметры для отображения Popover окна с краткими данными по фильму в карточке фильма для "Слайдера"
export const getStatePopoverViewFilmGenreSlider = (popoverViewFilmGenreSlider) => {
    return {
        type: 'STATE_POPOVER_FILM_GENRE_SLIDER_VIEW',
        popoverViewFilmGenreSlider
    }
}