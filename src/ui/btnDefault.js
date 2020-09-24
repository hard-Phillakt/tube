import React from 'react';

const btnDefault = (props) => {

    return (
        <button className="uk-button uk-button-default" onClick={() => (props.getPosts ? props.getPosts(10) : null)}>
            {props.name}
        </button>
    )
}

export default btnDefault;