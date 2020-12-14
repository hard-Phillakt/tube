import timer from '../components/_timer/timer';


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
                    }else {
                        dispatch(getFilmsAction(genres_list.items = false));
                    }
                }
            });
}










//  Получить категории с фильмами
const getPostsAction = (posts) => {
    return {
        type: 'GET_POSTS',
        posts
    }
}

export const getAsyncPosts = (param, count) => {

    return (dispatch) =>
        fetch('http://tube-serv/api/v1/cats?expand=films,genres')
            .then(response => response.json())
            .then(json => {
                if (json) {

                    const section_cats = {
                        items: []
                    };

                    json.items.forEach((item, i) => {

                        //  Фильтруем категории по жанрам 
                        if (item.genres[0].slug === param) {
                            
                            //  если в категории есть посты 
                            if(item.films.length){
                                item.films = item.films.splice(0, count ? count : 3);
                            }
                            
                            section_cats.items.push(item);
                        }
                    });

                    if (section_cats.items.length) {
                        dispatch(getPostsAction(section_cats));
                    }else {
                        dispatch(getPostsAction(section_cats.items = false));
                    }
                }
            });
}

//  Получить фильм по id
const getPostbyIdAction = (currentPost) => {
    return {
        type: 'GET_POST_BY_ID',
        currentPost
    }
}

export const getAsyncPostbyIdAction = (params) => {

    return (dispatch) =>
        fetch(`http://tube-serv/api/v1/cats?expand=films`)
            .then(response => response.json())
            .then(json => {

                json.items.forEach((cat, i) => {
                    if (cat.slug === params.cat) {
                        cat.films.forEach((film, i) => {
                            if (film.id === parseInt(params.id)) {
                                dispatch(getPostbyIdAction(film));
                            }
                        })
                    }
                });

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




