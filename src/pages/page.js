import React from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";

class Page extends React.Component {


    componentDidMount() {
        // this.props.setDataPath(this.props.match);
    }

    render() {

        console.log(this.props);
        
        return (

            <div className="
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
                            {/* <img src="images/light.jpg" alt="text" uk-cover="true" /> */}
                            <canvas width={600} height={400} />
                        </div>
                        <div>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">Media Left</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page);
