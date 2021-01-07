import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import DescriptionBrief from '../description-brief/descriptionBrief';
import { getStatePopoverViewFilter } from '../../actions/actionsFilms';

// import Preloader from '../preloader/preloader';
// import BtnDefault from '../../ui/buttons/btnDefault';
// import { getAsyncPosts } from '../../actions/actions';

import "./_sections.scss";

class SectionsHomeFilter extends React.Component {


    getTitle() {
        return (
            <h3 className="
            uk-heading-line 
            uk-heading-medium 
            uk-padding 
            uk-padding-remove-left
            uk-padding-remove-top
            tb-title__h1
            ">
                <span>{this.props.title}</span>
            </h3>
        )
    }

    toUpWindow() {
        window.scroll({ top: 0, left: 0 });
    }

    createMarkup(arg) {
        return { __html: arg };
    }

    componentDidMount() {

    }

    viewPopoverHandlerFilter(popoverViewFilter) {
        this.props.films.popoverView = popoverViewFilter;
        this.props.setStatePopoverViewFilter(this.props.films.popoverView);
    }

    createMarkup(arg) {
        return { __html: arg };
    }

    render() {
        return (
            <div className="popover-wrap"
                onMouseEnter={() => {

                    // Передаем параметры для отображения Popover окна с краткими данными по "Фильтрам"
                    const popoverViewFilter = {
                        'id': this.props.filterFilmFromGenres.id,
                        'view': true
                    };

                    this.viewPopoverHandlerFilter(popoverViewFilter);
                }}
                onMouseLeave={() => {

                    // Передаем параметры для скрытия Popover окна с краткими данными по "Фильтрам"
                    const popoverViewFilter = {
                        'id': this.props.filterFilmFromGenres.id,
                        'view': false
                    };

                    this.viewPopoverHandlerFilter(popoverViewFilter);
                }}
            >
                <Link
                    to={`vf/${this.props.genre.id}/${this.props.genre.slug}/${this.props.filterFilmFromGenres.id}/${this.props.filterFilmFromGenres.slug}`}
                >
                    <div
                    // uk-tooltip={'title: ' + this.props.filterFilmFromGenres.description + '; pos: right-top; delay: 500;'} 
                    >
                        <div className="uk-card-media-top">
                            <img src={"http://tube-serv" + this.props.filterFilmFromGenres.poster_img} alt={this.props.filterFilmFromGenres.slug} />
                        </div>
                        <div className="uk-margin-small-top">
                            <div className="tb-link">{this.props.filterFilmFromGenres.title}</div>
                        </div>
                    </div>
                </Link>

                {
                    this.props.films.popoverViewFilter.id == this.props.filterFilmFromGenres.id && this.props.films.popoverViewFilter.view ?
                        <DescriptionBrief brief={this.props.filterFilmFromGenres} />
                        :
                        null
                }

            </div>
        )
    }
}

const mapStateToProps = props => {

    // console.log('SectionsHomeFilter', props);

    return props;
};

const mapDispatchToProps = (dispatch) => {
    return {
        // getAsyncPostsHandler: (slug, count) => {
        //     dispatch(getAsyncPosts(slug, count));
        // }
        setStatePopoverViewFilter: (popoverViewFilter) => {
            dispatch(getStatePopoverViewFilter(popoverViewFilter));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionsHomeFilter);
