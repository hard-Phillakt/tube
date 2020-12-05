import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { getAsyncMovAllFromCatAction, getAsyncPostbyIdFromSliderAction } from '../../actions/actions';

import './_sliderDefault.scss';


//  Player 
import Plyr from 'plyr';


class SliderDefault extends React.Component {

    componentDidMount() {
        // Выводим остальные фильмы из категории в слайдер
        this.props.setAsyncMovAllFromCatAction(this.props.matchparam);
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

                {
                    this.props.posts.movAllFromCat ?

                        <div uk-slider="true" className="wrap-slider-items">
                            <ul className="uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@">

                                {
                                    this.props.posts.movAllFromCat.map((item, i) => {

                                        return (
                                            <li key={item.slug}>

                                                <div
                                                    className="tb-slider-item"
                                                    style={{ height: 'auto', width: '70%' }}>

                                                    <Link onClick={() => {

                                                        // this.props.plyr.current.stop();


                                                        this.toUpWindow();

                                                        // Формируем объект для рендера видео из слайдера 
                                                        let nextFilm = {
                                                            cat: this.props.matchparam.cat,
                                                            id: item.id,
                                                            slug: item.slug
                                                        }

                                                        this.props.setAsyncPostbyIdFromSliderAction(nextFilm);

                                                        this.props.setAsyncMovAllFromCatAction(nextFilm);

                                                        console.log(this.props.plyr.current);

                                                        // this.props.plyr.current.load();
                                                        // this.props.plyr.current.destroy();

                                                    }}
                                                        to={`/view/${this.props.matchparam.cat}/${item.id}/${item.slug}`}
                                                        className="uk-card uk-card-default uk-card-body tb-card-body"
                                                    // style={{ backgroundImage: `url(${item.url})` }}
                                                    >
                                                    </Link>

                                                    <div>
                                                        <div className="uk-margin-small-bottom">
                                                            <Link
                                                                to={`/view/${this.props.matchparam.cat}/${item.id}/${item.slug}`}
                                                                className="tb-link"
                                                            >
                                                                {item.title}
                                                            </Link>
                                                        </div>

                                                        <div>
                                                            <span
                                                                className="tb-tooltip-box"
                                                                uk-tooltip="title: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum vel laborum itaque dolor adipisci voluptates quae inventore est ad dolores?; pos: top-left"
                                                                dangerouslySetInnerHTML={this.createMarkup(item.description)}
                                                            >
                                                            </span>
                                                        </div>
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
                        :
                        null
                }


            </div>
        )
    }

}

const mapStateToProps = (props) => (props);

const mapDispatchToProps = (dispatch) => {
    return {
        setAsyncMovAllFromCatAction: (param) => {
            dispatch(getAsyncMovAllFromCatAction(param));
        },
        setAsyncPostbyIdFromSliderAction: (param) => {
            dispatch(getAsyncPostbyIdFromSliderAction(param));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderDefault);