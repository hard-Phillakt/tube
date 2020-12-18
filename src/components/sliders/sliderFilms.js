import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { 
    getAsyncAllFilmsFromGenreAction, 
    getAsyncFilmByIdFromSliderAction, 
    getStateBntPlay } from '../../actions/actionsFilms';

import './_sliderDefault.scss';


//  Player 
// import Plyr from 'plyr';


class sliderFilms extends React.Component {

    componentDidMount() {

        // Выводим остальные фильмы из категории в слайдер
        this.props.setAsyncAllFilmsFromGenreAction(this.props.matchparam);
    }

    createMarkup(arg) {
        return { __html: arg };
    }

    toUpWindow() {
        window.scroll({ top: 0, left: 0 });
    }

    render() {

        return (
            <div className="tb-wrap-slider">

                <div uk-slider="true" className="wrap-slider-items">
                    <ul className="uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@m">

                        {
                            this.props.films.filmsFromIdGenre.map((item, i) => {

                                return (
                                    <li key={item.slug}>

                                        <div
                                            className="tb-slider-item"
                                            style={{ height: 'auto', width: '70%' }}>

                                            <Link onClick={() => {

                                                // Загружаем фильм из слайдера 
                                                this.props.setAsyncFilmByIdFromSliderAction(item.id);

                                                // Обновляем список фильмов в слайдере под фильмом
                                                let param = {
                                                    id_genre: this.props.matchparam.id_genre,
                                                    genre: this.props.matchparam.slug,
                                                    id_films: item.id,
                                                    slug: item.slug
                                                };

                                                this.props.setAsyncAllFilmsFromGenreAction(param);

                                                this.props.setStateBntPlay(true);

                                                this.props.RefPlayer.pause();

                                            }}
                                                to={`/vf/${this.props.matchparam.id_genre}/${this.props.matchparam.genre}/${item.id}/${item.slug}`}

                                                className="uk-card uk-card-default  tb-card-body"

                                            // style={{
                                            //     backgroundImage: `url(http://tube-serv${item.poster_img})`,
                                            //     backgroundSize: 'cover'
                                            // }}

                                            >
                                                <img src={"http://tube-serv" + item.poster_img} alt={item.slug} />
                                            </Link>

                                            <div className="uk-margin-small-top">
                                                <Link onClick={() => (this.toUpWindow())} className="tb-link" to={`/vf/${this.props.matchparam.id_genre}/${this.props.matchparam.genre}/${item.id}/${item.slug}`}>{item.title}</Link>
                                            </div>


                                        </div>

                                    </li>
                                )
                            })
                        }

                    </ul>
                    <span className="uk-position-center-left uk-position-small uk-hidden-hover" uk-slidenav-previous="true" uk-slider-item="previous"></span>
                    <span className="uk-position-center-right uk-position-small uk-hidden-hover" uk-slidenav-next="true" uk-slider-item="next"></span>
                </div>


            </div>
        )
    }

}

const mapStateToProps = (props) => (props);

const mapDispatchToProps = (dispatch) => {
    return {
        setAsyncAllFilmsFromGenreAction: (param) => {
            dispatch(getAsyncAllFilmsFromGenreAction(param));
        },
        setAsyncFilmByIdFromSliderAction: (param) => {
            dispatch(getAsyncFilmByIdFromSliderAction(param));
        },
        setStateBntPlay: (param) => {
            dispatch(getStateBntPlay(param))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(sliderFilms);