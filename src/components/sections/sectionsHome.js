import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import DescriptionBrief from '../description-brief/descriptionBrief';

// import Preloader from '../preloader/preloader';
// import BtnDefault from '../../ui/buttons/btnDefault';
import { getStatePopoverViewPremiere } from '../../actions/actionsFilms';

import "./_sections.scss";

class SectionsHome extends React.Component {


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
        window.scroll({ top: 0, left: 0 });
    }

    createMarkup(arg) {
        return { __html: arg };
    }

    componentDidMount() {
    }

    viewPopoverHandlerPremiere(popoverViewPremiere) {
        this.props.films.popoverViewPremiere = popoverViewPremiere;
        this.props.setStatePopoverViewPremiere(this.props.films.popoverViewPremiere);
    }

    createMarkup(arg) {
        return { __html: arg };
    }

    render() {
        return (
            <div className="popover-wrap"
                onMouseEnter={() => {

                    // Передаем параметры для отображения Popover окна с краткими данными по фильму
                    const popoverViewPremiere = {
                        'id': this.props.filmsAllItems.id,
                        'view': true
                    };

                    this.viewPopoverHandlerPremiere(popoverViewPremiere);
                }}
                onMouseLeave={() => {

                    // Передаем параметры для скрытия Popover окна с краткими данными по фильму
                    const popoverViewPremiere = {
                        'id': this.props.filmsAllItems.id,
                        'view': false
                    };

                    this.viewPopoverHandlerPremiere(popoverViewPremiere);
                }}
            >
                <Link
                    to={`vf/${this.props.filmsAllItems.films_to_genres[0].id}/${this.props.filmsAllItems.films_to_genres[0].slug}/${this.props.filmsAllItems.id}/${this.props.filmsAllItems.slug}`}
                >
                    {/* <div uk-tooltip={'title: ' + this.props.filmsAllItems.description + '; pos: right-top; delay: 500;'} > */}
                    <div>
                        <div className="uk-card-media-top">
                            <img src={"http://tube-serv" + this.props.filmsAllItems.poster_img} alt={this.props.filmsAllItems.slug} />
                        </div>
                        <div className="uk-margin-small-top">
                            <div className="tb-link">{this.props.filmsAllItems.title}</div>
                        </div>
                    </div>
                </Link>

                {
                    this.props.films.popoverViewPremiere.id == this.props.filmsAllItems.id && this.props.films.popoverViewPremiere.view ?
                        <DescriptionBrief brief={this.props.filmsAllItems} />
                        :
                        null
                }

            </div>

        )
    }
}

const mapStateToProps = props => {

    return props;
};

const mapDispatchToProps = (dispatch) => {
    return {
        setStatePopoverViewPremiere: (popoverView) => {
            dispatch(getStatePopoverViewPremiere(popoverView));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionsHome);
