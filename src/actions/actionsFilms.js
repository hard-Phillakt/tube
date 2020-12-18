// import timer from '../components/_timer/timer';

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

                    const genres_list = {
                        items: []
                    };

                    // json.items.forEach((item, i) => {

                    // console.log(json.items);

                    //     //  Фильтруем категории по жанрам 
                    //     // if (item.genres[0].slug === param) {

                    //     //     //  если в категории есть посты 
                    //     //     if(item.films.length){
                    //     //         item.films = item.films.splice(0, count ? count : 3);
                    //     //     }

                    //     //     genres_list.items.push(item);
                    //     // }
                    // });

                    if (json.items.length) {
                        dispatch(getFilmsAction(json.items));
                    } else {
                        dispatch(getFilmsAction(genres_list.items = false));
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
                    if (item.id != params.id_films) {
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
// Состояник кнопки Play при переключении фильмов

export const getStateBntPlay = (stateBnt) => {
    return {
        type: 'STATE_BTN_PLAY',
        stateBnt
    }
}