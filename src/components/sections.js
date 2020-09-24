import React from 'react';
import { connect } from 'react-redux';

import BtnDefault from '../ui/btnDefault';

class Sections extends React.Component {


    getTitle(){
        return (
            <h1 className="
            uk-heading-line 
            uk-heading-medium 
            uk-padding 
            uk-padding-remove-left
            uk-padding-remove-top
            ">
            <span>{this.props.title}</span>
        </h1>
        )
    }

    render() {

        return (
            <div>
                <div className="uk-section">
                    <div className="uk-container">

                        { this.props.title ? this.getTitle() : null } 

                        <div uk-grid="true" className="uk-grid-match">

                            {
                                this.props.dataPosts ?
                                    this.props.dataPosts.map((item, i) => {

                                        return (
                                            <div
                                                className="uk-width-1-5@m"
                                                key={item.thumbnailUrl}
                                            >

                                                <div className="uk-card uk-card-default uk-card-body"
                                                    style={{ backgroundImage: `url(${item.url})` }}
                                                >

                                                    {/* <p>{item.title}</p> */}
                                                </div>

                                            </div>
                                        )
                                    }) : null
                            }

                        </div>

                        <div className="uk-flex-center" uk-grid="true">
                            <BtnDefault name="Загрузить еще..." getPosts={this.props.getPosts} />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = props => (props);

export default connect(mapStateToProps, null)(Sections);
