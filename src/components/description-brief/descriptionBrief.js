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
                <div className="video-description">
                    Пришло время для нового главного героя. Пришло время для новой миссии. Особенно это становится важным, когда действие охватывает разные уголки мира. Что ждет человеческие судьбы среди пуль, шпионских разбирательств и&nbsp;неизвестности? Смогут&nbsp;ли общечеловеческие ц...
                </div>
                <div className="">
                    <div className="video-labels pull-left">
                        <span className="video-label video-quality">Full HD</span>
                        <span className="video-label video-age">16+</span>
                    </div>
                    <div className="foreign-ratings">
                        <div className="foreign-rating">
                            <span className="value">7.6</span> <span className="key">IMDb</span>
                        </div>
                        <div className="foreign-rating">
                            <span className="value">7.7</span> <span className="key">КП</span>
                        </div>
                    </div>
                    <div className="video-duration pull-left">
                        <span itemProp="duration">143 минуты</span>
                    </div>
                </div>
                <div className="widget voteButtons_v1 product-main orientation-horizontal fill-transparent size-small">
                    <div className="vote-buttons" >
                        <div className="btn-group">
                            <button type="button" className="vote-button is-like">
                                <span className="value">3 тыс.</span>
                            </button>
                            <button type="button" className="vote-button is-dislike">
                                <span className="value">654</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div></div></div>


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
