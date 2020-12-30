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
                    <span className="video-label video-age">Слоган: {this.props.brief.tagline}</span>
                </div>

                <div className="video-description">
                    Описание: {this.props.brief.description}
                </div>

                <div className="widget">

                    {/*
                    keywords(pin):"Хоббит: Нежданное путешествие (2012), смотреть онлайн&nbsp;в хорошем качестве, бесплатно."
original_url_video(pin):"itvi.herokuapp.com/hobbit_nezhdannoe_puteschestvie/hobbit_nezhdannoe_puteschestvie_.m3u8"
proxy_url_video(pin):"https://proxy-video.herokuapp.com"
poster_img(pin):"/files/global/films/hobbit-one/poster/hobbit-one-poster.webp"
year(pin):"28-Ноя-2012"
publish_date(pin):"13-Дек-2020"
tagline(pin):"«From the smallest beginnings come the greatest legends»"
producer(pin):"Питер Джексон"
views(pin):""
world_premiere(pin):"28-Ноя-2012"
release_date_in_russia(pin):"19-Дек-2012"
duration(pin):"169 мин. / 02:49"
                */}

                    <div className="video-labels pull-left">
                        <span className="video-label video-age">Премьера в мире: {this.props.brief.year}</span>
                    </div>

                    <div className="video-labels pull-left">
                        <span className="video-label video-age">Премьера в России: {this.props.brief.release_date_in_russia}</span>
                    </div>

                    <div className="video-labels pull-left">
                        <span className="video-label video-quality">Режисер: {this.props.brief.producer}</span>
                    </div>

                    <div className="video-duration pull-left">
                        <span itemProp="duration">Продолжительность: {this.props.brief.duration}</span>
                    </div>

                    {/* <div className="video-duration pull-left">
                        <span itemProp="duration">Просмотры: {this.props.brief.views}</span>
                    </div> */}

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
