// let _ = require('lodash');


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
