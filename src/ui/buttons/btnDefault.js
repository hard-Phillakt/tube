import React from 'react';

import './_btnDefault.scss';

const btnDefault = (props) => {

    return (
        <button className="uk-button uk-button-default tb-uk-button-default" onClick={() => (props.getPosts ? props.getPosts(10) : null)}>
            <span className="
            uk-padding-small
            uk-padding-remove-top
            uk-padding-remove-bottom
            uk-padding-remove-left
            ">{props.name}</span> <span className="material-icons">loop</span>
        </button>
    )
}

export default btnDefault;