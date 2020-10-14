import React from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";

//  Player 
import Plyr from 'plyr';
import "../components/plyr/sass/plyr.scss";
import "../components/plyr/sass/_custom.scss";


class Page extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        // this.props.setDataPath(this.props.match);
        new Plyr(`#${this.myRef.current.id}`, {
            controls: ['play-large', 'progress', 'current-time', 'volume', 'fullscreen']
        });
    }

    render() {

        // console.log(this.props);

        return (

            <section className="
            page
            uk-padding 
            uk-padding-remove-left
            uk-padding-remove-right
            ">
                <div className="uk-container">
                    <ul className="uk-breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li><span>title</span></li>
                    </ul>

                    <h1>Title Page</h1>
                    <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true">
                        <div className="uk-card-media-left uk-cover-container">

                            <video id="player" playsInline controls ref={this.myRef}>
                                <source src="https://hard-phillakt.github.io/one.mp4" type="video/mp4" />
                            </video>

                        </div>
                        <div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Media Left</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


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

export default connect(mapStateToProps, mapDispatchToProps)(Page);
