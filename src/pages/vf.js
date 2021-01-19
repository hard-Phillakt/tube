import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getAsyncFilmbyIdAction, getStateBntPlay, getAsyncFilms } from '../actions/actionsFilms';
import Hls from '../../node_modules/hls.js';

import { Helmet } from "react-helmet";

import './view.scss';

//  Slider
import SliderDefault from '../components/sliders/sliderFilms';

class View extends React.Component {

    constructor(props) {
        super(props);
        this.RefPlayer = React.createRef();
        this.RefPlayerBtnPlay = React.createRef();
    }

    componentDidMount() {
        //  Длаем выборку ajax фильма по id
        this.props.setAsyncFilmbyIdAction(this.props.match.params);
        this.props.setAsyncFilmsHandler();
    }

    filmPlay() {

        // Склеиваем ссылку для плеера
        const videoSrc = this.props.films.filmsCurrent.proxy_url_video + "/" + this.props.films.filmsCurrent.original_url_video;

        if (Hls.isSupported()) {
            var config = {
                xhrSetup: function (xhr, url) {
                    var data = new Date().getTime()
                    xhr.setRequestHeader('x-token', 'token-example ' + data);
                },
            };
            const hls = new Hls(config);

            hls.loadSource(videoSrc);
            hls.attachMedia(this.RefPlayer.current);
            this.RefPlayer.current.play();
        }
    }


    createMarkup(arg) {
        return { __html: arg };
    }

    render() {

        return (

            <section className="
            vf
            page
            uk-padding 
            uk-padding-remove-left
            uk-padding-remove-right
            ">

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{this.props.films.filmsCurrent.title}</title>
                    <meta name="description" content={this.props.films.filmsCurrent.description} />
                    <meta name="keywords" content={this.props.films.filmsCurrent.keywords} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#444" />
                </Helmet>


                <div className="uk-container uk-container-small">
                    <ul className="uk-breadcrumb">
                        <li><Link to="/">Главная</Link></li>
                        {/* <li><span>{this.props.match.params.genre}</span></li> */}
                    </ul>

                    <h1 className="uk-article-title">{this.props.films.filmsCurrent.title}</h1>

                    <div className="uk-container uk-container-small uk-margin-top">

                        <div className="uk-column-1-2@s uk-column-1-3@m uk-column-1-3@l">
                            <img
                                src={"http://tube-serv" + this.props.films.filmsCurrent.poster_img} alt={this.props.films.filmsCurrent.slug}
                                className="uk-margin-small-bottom"
                            />
                            <div>
                                <p>Оригинальное название: {this.props.films.filmsCurrent.original_title}</p>
                                <p dangerouslySetInnerHTML={this.createMarkup("Слоган: " + this.props.films.filmsCurrent.tagline)}></p>
                                <p>Режиссер: {this.props.films.filmsCurrent.producer}</p>
                                <p>Дата публикации: {this.props.films.filmsCurrent.publish_date}</p>
                                <p>Премьера в мире: {this.props.films.filmsCurrent.world_premiere}</p>
                                <p>Премьера в России: {this.props.films.filmsCurrent.release_date_in_russia}</p>
                                <p>Продолжительность: {this.props.films.filmsCurrent.duration}</p>
                                <p>Год: {this.props.films.filmsCurrent.year}</p>
                            </div>
                        </div>

                        <div className="
                        uk-padding-small 
                        uk-padding-remove-left 
                        uk-padding-remove-right" dangerouslySetInnerHTML={this.createMarkup(this.props.films.filmsCurrent.content)}></div>

                    </div>

                    <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-1@s uk-margin" uk-grid="true">

                        <div className="uk-card-media-left uk-cover-container">

                            {
                                this.props.films.filmsCurrent ?
                                    <div className="vf-wrap vf-wrap__player">

                                        <video
                                            className="video-js vjs-theme-city"
                                            // id={"player_" + this.props.films.filmsCurrent.id}
                                            id="player"
                                            playsInline
                                            controls
                                            ref={this.RefPlayer}
                                            style={{ width: `100%`, height: `auto` }}
                                        >
                                        </video>

                                        {
                                            this.props.films.btnViewPlay ?

                                                <div className="vf-btn-play"
                                                    ref={this.RefPlayerBtnPlay}
                                                    style={{
                                                        // display: this.props.films.btnViewPlay ? 'flex' : 'none',
                                                        background: "#444"
                                                    }}
                                                    onClick={() => {
                                                        this.filmPlay();
                                                        this.props.setStateBntPlay(false);
                                                    }}>

                                                    <span className="material-icons">
                                                        play_arrow
                                                    </span>
                                                </div>
                                                :
                                                null
                                        }

                                    </div>
                                    :

                                    null
                            }

                        </div>
                    </div>
                </div>

                <div className="uk-container uk-container-small">
                    <div className="uk-section">
                        <div className="uk-column-1-1@l">
                            <SliderDefault
                                RefPlayer={this.RefPlayer.current}
                                matchparam={this.props.match.params}
                            />
                        </div>
                    </div>
                </div>

                <div className="uk-container">
                    <div className="uk-column-1-1@l">
                        {/* <Section title="Похожие сериалы" dataPosts={this.props.posts.data} /> */}
                    </div>
                </div>

            </section>
        )
    }
}

const mapStateToProps = (props) => {
    // console.log("vf: ", props.films.filmsCurrent);
    return props;
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAsyncFilmbyIdAction: (param) => {
            dispatch(getAsyncFilmbyIdAction(param));
        },
        setStateBntPlay: (param) => {
            dispatch(getStateBntPlay(param))
        },
        setAsyncFilmsHandler: (count) => {
            dispatch(getAsyncFilms(count));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
