import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import './_sliderDefault.scss';

class SliderDefault extends React.Component {



    render() {

        return(
            <div className="tb-wrap-slider">

            <div uk-slider="true">
                <ul className="uk-slider-items uk-child-width-1-3@s uk-child-width-1-4@">
                    <li>
                        <div className="tb-slider-item" style={{ height: 270, width: `70%`, background: `#eee` }}></div>
                    </li>
                    <li>
                        <div className="tb-slider-item" style={{ height: 270, width: `70%`, background: `#eee` }}></div>
                    </li>
                    <li>
                        <div className="tb-slider-item" style={{ height: 270, width: `70%`, background: `#eee` }}></div>
                    </li>
                    <li>
                        <div className="tb-slider-item" style={{ height: 270, width: `70%`, background: `#eee` }}></div>
                    </li>
                    <li>
                        <div className="tb-slider-item" style={{ height: 270, width: `70%`, background: `#eee` }}></div>
                    </li>
                </ul>
                <span className="uk-position-center-left uk-position-small uk-hidden-hover" uk-slidenav-previous="true" uk-slider-item="previous"></span>
                <span className="uk-position-center-right uk-position-small uk-hidden-hover" uk-slidenav-next="true" uk-slider-item="next"></span>
            </div>
        </div>
        )
    }

}

const mapStateToProps = (props) => (props);

const mapDispatchToProps = (dispatch) => {
    return {
        // setDataPath: (param) => {
        //     dispatch({ type: "SET_DATA_PATH", dataPath: param })
        // }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderDefault);