import React from 'react';
import { connect } from 'react-redux';

import "../description-brief/_descriptionBrief.scss";

class DescriptionBrief extends React.Component {

    toUpWindow() {
        window.scroll({ top: 0, left: 0 });
    }

    createMarkup(arg) {
        return { __html: arg };
    }

    componentDidMount() {

    }

    render() {

        return (
            <div className="popover fade bs-popover-right show"><div className="popover-body"><div className="video-popover">
                <div className="video-labels pull-left">
                    <span className="video-label video-age">{this.props.brief.tagline}</span>
                </div>

                <div className="video-description">
                    {this.props.brief.description}
                </div>

                <div className="widget">

                    {/* <div className="video-labels pull-left">
                        <span className="video-label video-quality">Формат: Full HD</span>
                    </div> */}

                    <div className="video-labels pull-left">
                        <span className="video-label video-age">Год выпуска: {this.props.brief.year}</span>
                    </div>

                    <div className="video-duration pull-left">
                        <span itemProp="duration">Продолжительность: {this.props.brief.duration}</span>
                    </div>

                </div>
                <div className="widget voteButtons_v1 product-main orientation-horizontal fill-transparent size-small">

                    <div className="vote-buttons">
                        <div className="btn-group uk-flex uk-flex-between@l">

                            <button type="button" className="uk-button uk-flex uk-flex-center uk-flex-middle like-c-white like-light">
                                <span className="material-icons uk-margin-small-right">
                                    thumb_up
                                </span>
                                <span>3 тыс.</span>
                            </button>

                            <button type="button" className="uk-button uk-flex uk-flex-center uk-flex-middle like-c-white dislike-light">
                                <span className="material-icons uk-margin-small-right">
                                    thumb_down
                                </span>
                                <span>1 тыс.</span>
                            </button>

                        </div>
                    </div>

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
        // getAsyncPostsHandler: (slug, count) => {
        //     dispatch(getAsyncPosts(slug, count));
        // }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionBrief);
