import React from 'react';
import { connect } from 'react-redux';
// import { getAsyncPosts } from '../actions/actions';
import { Link } from "react-router-dom";
// import { getAsyncPostbyIdAction } from '../actions/actions';
import { getAsyncFilmbyIdAction } from '../actions/actionsFilms';
import Hls from '../../node_modules/hls.js';


//  Player 
// import Plyr from 'plyr';
// import "../components/plyr/sass/plyr.scss";
// import "../components/plyr/sass/_custom.scss";

//  Slider
import SliderDefault from '../components/sliders/sliderDefault';

// Section
// import Section from '../components/sections/sections';


class View extends React.Component {

    constructor(props) {
        super(props);
        this.RefPlayer = React.createRef();

        // if (this.props.films.filmsCurrent) {
        //     this.props.films.filmsCurrent = undefined;
        // }
    }

    componentDidMount() {

        // console.log('componentDidMount');

        // console.log(this.props.films.filmsCurrent);

        // if(this.props.films.filmsCurrent){
        // console.log('da');

        // }else {
        //     console.log('net');
        // }

        // this.plyr = new Plyr(`#${this.RefPlayer.current.id}`, {
        //     controls: ['play', 'progress', 'current-time', 'volume', 'fullscreen']
        // });

        //  Длаем выборку ajax фильма по id
        this.props.setAsyncFilmbyIdAction(this.props.match.params);

        // console.log(this.props.match);

    }

    filmPlay() {
        const videoSrc = this.props.films.filmsCurrent.proxy_url_video + "/" + this.props.films.filmsCurrent.original_url_video;

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoSrc);
            hls.attachMedia(this.RefPlayer.current);
            this.RefPlayer.current.play();
        }
    }


    createMarkup(arg) {
        return { __html: arg };
    }

    render() {

        // console.log(this.plyr);

        return (

            <section className="
            page
            uk-padding 
            uk-padding-remove-left
            uk-padding-remove-right
            ">
                <div className="uk-container uk-container-small">
                    <ul className="uk-breadcrumb">
                        <li><Link to="/">Главная</Link></li>
                        {/* <li><span>{this.props.match.params.genre}</span></li> */}
                    </ul>

                    <h1>

                    </h1>
                    <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-1@s uk-margin" uk-grid="true">

                        <div className="uk-card-media-left uk-cover-container">

                            {
                                this.props.films.filmsCurrent ?
                                    <video
                                        onClick={() => (this.filmPlay(this.props.films.filmsCurrent))}
                                        id={"player_" + this.props.films.filmsCurrent.id} playsInline controls ref={this.RefPlayer}
                                        style={{ width: `100%` }}
                                    >
                                    </video>
                                    :
                                    <video id="preloader" style={{ visibility: 'hidden' }} ref={this.RefPlayer}></video>
                            }

                        </div>

                        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-3@s" uk-grid="true">
                            <div className="uk-card-media-left uk-cover-container">
                                <div style={{ width: `335px`, height: `100%`, background: `#444` }}></div>
                            </div>
                            <div>
                                <div className="uk-card-body">
                                    <h3 className="uk-card-title">

                                    </h3>


                                </div>
                            </div>
                            <div>
                                <div className="uk-card-body">
                                    {/*  Доп информация */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="uk-container uk-container-small">
                    <div className="uk-section">
                        <div className="uk-column-1-1@l">
                            {/* <SliderDefault
                                matchparam={this.props.match.params}
                                plyr={this.myPlyr}
                            /> */}
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
