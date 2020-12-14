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
        // this.myPlyr = React.createRef();

        // if (this.props.posts.currentPost) {
        //     this.props.posts.currentPost = undefined;
        // }
    }

    componentDidMount() {

        // this.plyr = new Plyr(`#${this.myPlyr.current.id}`, {
        //     controls: ['play', 'progress', 'current-time', 'volume', 'fullscreen']
        // });

        //  Длаем выборку ajax фильма по id
        // this.props.setAsyncPostbyIdAction(this.props.match.params);

        console.log(this.props.match);

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
