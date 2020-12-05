import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Preloader from '../preloader/preloader';
import BtnDefault from '../../ui/buttons/btnDefault';
import { getAsyncPosts } from '../../actions/actions';

import "./_sections.scss";

class Sections extends React.Component {


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
        // setTimeout(() => (window.scroll({ top: 0, left: 0, behavior: 'smooth' })), 600)
        window.scroll({ top: 0, left: 0 });
    }

    createMarkup(arg) {
        return { __html: arg };
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
                                this.props.dataPosts.films ?

                                    this.props.dataPosts.films.map((item, i) => {

                                        return (
                                            <div
                                                className="uk-width-1-5@m"
                                                key={item.id}
                                            >
                                                <Link onClick={() => (this.toUpWindow())}
                                                    to={`/view/${this.props.dataPosts.slug}/${item.id}/${item.slug}`}
                                                    className="uk-card uk-card-default uk-card-body tb-card-body"
                                                //  style={{ backgroundImage: `url(${item.url})` }}
                                                ></Link>

                                                <div className="uk-margin-small-bottom">
                                                    <Link onClick={() => (this.toUpWindow())} className="tb-link" to={`/view/${this.props.dataPosts.slug}/${item.id}/${item.slug}`}>{item.title}</Link>
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
                                        genres={this.props}
                                        getAll={this.props.getAsyncPostsHandler}
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
        getAsyncPostsHandler: (slug, count) => {
            dispatch(getAsyncPosts(slug, count));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sections);
