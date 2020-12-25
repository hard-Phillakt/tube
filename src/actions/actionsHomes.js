let _ = require('lodash');


// 1.
//  Получить список всех фильмов по возрастанию id
const getFilmsAllAction = (filmsAll) => {
    return {
        type: 'GET_FILMS_ALL',
        filmsAll
    }
}

export const getAsyncFilmsAllAction = () => {

    return (dispatch) => {
        fetch('http://tube-serv/api/v1/films?expand=films_to_genres')
            .then(response => response.json())
            .then(json => {
                if (json.items) {
                    // делаем реверс массива по возрастанию id
                    json.items.reverse();
                    dispatch(getFilmsAllAction(json.items));
                }
            }).catch((e) => {
                console.log(new Error(e));
            })
    }
}



// 2.
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
                        if (item.films_to_genres.length) {
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



// 3.
//  Получить категории с фильмами по фильтру 
const getFilterFilmsFromGenresAction = (filterFilmsFromGenresHome) => {
    return {
        type: 'GET_FILTE_FILMS_FROM_GENRES',
        filterFilmsFromGenresHome
    }
}

export const getAsyncFilterFilmsFromGenres = (item) => {


    console.log('filterFilmsFromGenresHome', item.films_to_genres);


    return (dispatch) => {
        dispatch(getFilterFilmsFromGenresAction(item.films_to_genres));
    };

        // fetch('http://tube-serv/api/v1/films-genres?expand=films_to_genres')
        //     .then(response => response.json())
        //     .then(json => {
        //         if (json) {

        //             // Рандомная сортировка массива 
        //             json.items.forEach((item, i) => {
        //                 if(item.films_to_genres.length){
        //                     item.films_to_genres = _.shuffle(item.films_to_genres);
        //                 }
        //             });

        //             if (json.items.length) {
        //                 dispatch(getFilmsAction(json.items));
        //             } else {
        //                 dispatch(getFilmsAction(json.items.items = false));
        //             }
        //         }
        //     });
}