import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
// import Preloader from '../preloader/preloader';
// import BtnDefault from '../../ui/buttons/btnDefault';
// import { getAsyncPosts } from '../../actions/actions';

import "./_sections.scss";

class SectionsHomeFilter extends React.Component {


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

    createMarkup(arg) {
        return { __html: arg };
    }

    render() {
        return (

            <Link
                to={`vf/`}
            >
                <div uk-tooltip={'title: ' +  + '; pos: right-top; delay: 500;'} >
                    <div className="uk-card-media-top">
                        <img src={"http://tube-serv" } alt={"123"} />
                    </div>
                    <h5>{}</h5>
                </div>
            </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(SectionsHomeFilter);
