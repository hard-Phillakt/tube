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
        fetch(`http://tube-serv/api/v1/films/${params.id}`)
            .then(response => response.json())
            .then(json => {
                if(json.slug === params.slug){
                    dispatch(getFilmbyIdAction(json));
                }
            });
}






//  Получить все фильмы из категории без текущего фильма в слайдер
const getMovAllFromCatAction = (allFilms) => {
    return {
        type: 'GET_MOV_ALL_FROM_CAT',
        allFilms
    }
}

export const getAsyncMovAllFromCatAction = (params) => {

    return (dispatch) =>
        fetch('http://tube-serv/api/v1/cats?expand=films')
            .then(response => response.json())
            .then(json => {

                json.items.forEach((cat, i) => {
                    if (cat.slug === params.cat) {
                        let allFilms = [];

                        cat.films.find((item) => {
                            if (item.id !== parseInt(params.id)) {
                                allFilms.push(item);
                            }
                        })

                        dispatch(getMovAllFromCatAction(allFilms));
                    }
                });
            });
}

//  Получить фильм по id из слайдера
const getPostbyIdFromSliderAction = (currentPost) => {
    return {
        type: 'GET_POST_BY_ID_FROM_SLIDER',
        currentPost
    }
}

export const getAsyncPostbyIdFromSliderAction = (params) => {

    return (dispatch) =>
        fetch(`http://tube-serv/api/v1/cats?expand=films`)
            .then(response => response.json())
            .then(json => {
                json.items.forEach((cat, i) => {
                    if (cat.slug === params.cat) {
                        cat.films.forEach((film, i) => {
                            if (film.id === parseInt(params.id)) {
                                dispatch(getPostbyIdFromSliderAction(film));
                            }
                        })
                    }
                });

            });
}




