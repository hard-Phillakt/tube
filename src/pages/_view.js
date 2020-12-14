import React from 'react';
import { connect } from 'react-redux';
// import { getAsyncPosts } from '../actions/actions';
import { Link } from "react-router-dom";
import { getAsyncPostbyIdAction } from '../actions/actions';


//  Player 
import Plyr from 'plyr';
import "../components/plyr/sass/plyr.scss";
import "../components/plyr/sass/_custom.scss";

//  Slider
import SliderDefault from '../components/sliders/sliderDefault';

// Section
// import Section from '../components/sections/sections';


class View extends React.Component {

    constructor(props) {
        super(props);
        this.myPlyr = React.createRef();

        if (this.props.posts.currentPost) {
            this.props.posts.currentPost = undefined;
        }
    }

    componentDidMount() {

        this.plyr = new Plyr(`#${this.myPlyr.current.id}`, {
            controls: ['play', 'progress', 'current-time', 'volume', 'fullscreen']
        });

        //  Длаем выборку ajax фильма по id
        this.props.setAsyncPostbyIdAction(this.props.match.params);

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
                        <li><span>{this.props.match.params.cat}</span></li>
                    </ul>

                    <h1>{this.props.posts.currentPost ? this.props.posts.currentPost.title : null}</h1>
                    <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-1@s uk-margin" uk-grid="true">
                        <div className="uk-card-media-left uk-cover-container">

                            {
                                this.props.posts.currentPost ?
                                    <video id={"player_" + this.props.posts.currentPost.id} playsInline controls ref={this.myPlyr}
                                        style={{ width: `100%`, height: `550px` }}
                                        src={"https://itvi.herokuapp.com/src" + this.props.posts.currentPost.proxyServerUrlVideo}
                                    >
                                    </video>
                                    :
                                    <video id="preloader" style={{ visibility: 'hidden' }} ref={this.myPlyr}></video>
                            }


                        </div>

                        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-3@s" uk-grid="true">
                            <div className="uk-card-media-left uk-cover-container">
                                <div style={{ width: `335px`, height: `100%`, background: `#333` }}></div>
                            </div>
                            <div>
                                <div className="uk-card-body">
                                    <h3 className="uk-card-title">
                                        {this.props.posts.currentPost ? this.props.posts.currentPost.title : null}
                                    </h3>

                                    {
                                        this.props.posts.currentPost ?
                                            <p dangerouslySetInnerHTML={this.createMarkup(this.props.posts.currentPost.description)}></p>
                                            :
                                            null
                                    }

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
                            <SliderDefault
                                matchparam={this.props.match.params}
                                plyr={this.myPlyr}
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
    // console.log("view: ", props);
    return props;
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAsyncPostbyIdAction: (count) => {
            dispatch(getAsyncPostbyIdAction(count));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
