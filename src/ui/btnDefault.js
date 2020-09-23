
import React from 'react';

const btnDefault = (props) => {

    console.log(props);

    return (
        <button className="uk-button uk-button-default" onClick={() => (props.getPosts(10))}>
            {props.name}
        </button>
    )
}

export default btnDefault;