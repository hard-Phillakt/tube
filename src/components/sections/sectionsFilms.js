import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
// import Preloader from '../preloader/preloader';
import BtnDefault from '../../ui/buttons/btnDefault';
// import { getAsyncPosts } from '../../actions/actions';
import { getStatePopoverViewFilmGenre } from '../../actions/actionsFilms';
import DescriptionBrief from '../description-brief/descriptionBrief';

import "./_sections.scss";

class SectionsFilms extends React.Component {

    getTitle() {
        return (
            <h1 className="
            uk-heading-line 
            uk-heading-medium 
            uk-padding 
            uk-padding-remove-left
            uk-padding-remove-top
            tb-title__h1
            ">
                <span>{this.props.title}</span>
            </h1>
        )
    }

    toUpWindow() {
        window.scroll({ top: 0, left: 0 });
    }

    createMarkup(arg) {
        return { __html: arg };
    }

    viewPopoverHandlerPremiere(popoverViewFilmGenre) {
        this.props.films.popoverViewFilmGenre = popoverViewFilmGenre;
        this.props.setStatePopoverViewFilmGenre(this.props.films.popoverViewFilmGenre);
    }

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <div className="uk-section">
                    <div className="uk-container">

                        {this.props.title ? this.getTitle() : null}

                        <div uk-grid="true" className="uk-grid-match">

                            {
                                this.props.filmsGenres.films_to_genres ?

                                    this.props.filmsGenres.films_to_genres.map((item, i) => {

                                        return (

                                            <div
                                                className="uk-width-1-6@m popover-wrap"
                                                // uk-tooltip={"title: " + item.description + "; pos: right-top; delay: 500"}
                                                key={item.id}
                                                onMouseEnter={() => {

                                                    // Передаем параметры для отображения Popover окна с краткими данными по "Фильтрам"
                                                    const popoverViewFilmGenre = {
                                                        'id': item.id,
                                                        'genre_id': this.props.filmsGenres.id,
                                                        'view': true
                                                    };

                                                    this.viewPopoverHandlerPremiere(popoverViewFilmGenre);

                                                }}
                                                onMouseLeave={() => {

                                                    // Передаем параметры для скрытия Popover окна с краткими данными по "Фильтрам"
                                                    const popoverViewFilmGenre = {
                                                        'id': item.id,
                                                        'genre_id': this.props.filmsGenres.id,
                                                        'view': false
                                                    };

                                                    this.viewPopoverHandlerPremiere(popoverViewFilmGenre);
                                                }}
                                            >
                                                <Link onClick={() => (this.toUpWindow())}
                                                    to={`/vf/${this.props.filmsGenres.id}/${this.props.filmsGenres.slug}/${item.id}/${item.slug}`}
                                                    className="uk-card uk-card-default uk-card-film"
                                                    style={{
                                                        backgroundImage: `url(http://tube-serv${item.poster_img})`,
                                                        backgroundSize: 'cover'
                                                    }}
                                                >
                                                    {/* <img src={"http://tube-serv" + item.poster_img} uk-img/> */}
                                                </Link>

                                                <div className="uk-margin-small-top">
                                                    <Link onClick={() => (this.toUpWindow())} className="tb-link" to={`/vf/${this.props.filmsGenres.id}/${this.props.filmsGenres.slug}/${item.id}/${item.slug}`}>{item.title}</Link>
                                                </div>

                                                {
                                                    // Делаем проверку: 
                                                    // если id фильма равен id попапа и id жанра фильма равен id жанру попапа и свойство view равно true 
                                                    // то показываем попап с краткой информацией
                                                    this.props.films.popoverViewFilmGenre.id == item.id && this.props.films.popoverViewFilmGenre.genre_id == this.props.filmsGenres.id && this.props.films.popoverViewFilmGenre.view ?
                                                        <DescriptionBrief brief={item} />
                                                        :
                                                        null
                                                }

                                            </div>


                                        )
                                    })
                                    :
                                    <div className="uk-text-secondary">
                                        <p>На стадии заполнения...</p>
                                    </div>

                            }

                        </div>

                        <div className="uk-flex-center" uk-grid="true">

                            {
                                this.props.viewBtnLoader ?
                                    <BtnDefault name="Показать все"
                                    // genres={this.props}
                                    // getAll={this.props.getAsyncPostsHandler}
                                    />
                                    :
                                    null
                            }

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = props => {
    return props;
};

const mapDispatchToProps = (dispatch) => {
    return {
        setStatePopoverViewFilmGenre: (popoverViewFilmGenre) => {
            dispatch(getStatePopoverViewFilmGenre(popoverViewFilmGenre));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionsFilms);
