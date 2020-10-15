import React from 'react';
import { connect } from 'react-redux';
import { getAsyncPosts } from '../actions/actions';
import { Link } from "react-router-dom";

//  Player 
import Plyr from 'plyr';
import "../components/plyr/sass/plyr.scss";
import "../components/plyr/sass/_custom.scss";

//  Slider
import SliderDefault from '../components/sliders/sliderDefault';

// Section
import Section from '../components/sections/sections';


class Video extends React.Component {

    constructor(props) {
        super(props);
        this.myPlyr = React.createRef();
    }

    componentDidMount() {
        // this.props.setDataPath(this.props.match);
        new Plyr(`#${this.myPlyr.current.id}`, {
            controls: ['play', 'progress', 'current-time', 'volume', 'fullscreen']
        });

        if (this.props.posts.data.length <= 0) {
            this.props.getAsyncPostsHandler(5);
        }
    }

    render() {

        console.log(this.props);

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
                        <li><span>title</span></li>
                    </ul>

                    <h1>Title Page</h1>
                    <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-1@s uk-margin" uk-grid="true">
                        <div className="uk-card-media-left uk-cover-container">
                            <video id="player" playsInline controls ref={this.myPlyr}>
                                <source src="https://hard-phillakt.github.io/one.mp4" type="video/mp4" />
                            </video>
                        </div>

                        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-3@s" uk-grid="true">
                            <div className="uk-card-media-left uk-cover-container">
                                <div style={{ width: `335px`, height: `100%`, background: `#333` }}></div>
                            </div>
                            <div>
                                <div className="uk-card-body">
                                    <h3 className="uk-card-title">Media Left</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card-body">
                                    <ul class="uk-list">
                                        <li>List item 1</li>
                                        <li>List item 2</li>
                                        <li>List item 3</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="uk-container uk-container-small">
                    <div className="uk-section">
                        <div className="uk-column-1-1@l">
                            <SliderDefault />
                        </div>
                    </div>
                </div>

                <div className="uk-container">
                    <div className="uk-column-1-1@l">
                        <Section title="Похожие сериалы" dataPosts={this.props.posts.data} />
                    </div>
                </div>

            </section>


        )
    }
}

const mapStateToProps = (props) => (props);

const mapDispatchToProps = (dispatch) => {
    return {
        // setDataPath: (param) => {
        //     dispatch({ type: "SET_DATA_PATH", dataPath: param })
        // }
        getAsyncPostsHandler: (count) => {
            dispatch(getAsyncPosts(count));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);
