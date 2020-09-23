import React from 'react';
import { connect } from 'react-redux';
import { getAsyncPosts } from '../actions/actions';
import BtnDefault from '../ui/btnDefault';


class Sections extends React.Component {



    render() {

        return (
            <div>
                <div className="uk-section">
                    <div className="uk-container">
                        <h1 className="uk-heading-line uk-heading-medium 
                        uk-padding 
                        uk-padding-remove-left
                        uk-padding-remove-top
                        ">
                            <span>Section one</span>
                        </h1>
                        <div uk-grid="true" className="uk-grid-match">

                            {
                                this.props.posts.data ?
                                    this.props.posts.data.map((item, i) => {

                                        return (
                                            <div
                                                className="uk-width-1-5@m"
                                                key={item.thumbnailUrl}
                                            >

                                                <div className="uk-card uk-card-default uk-card-body"
                                                    style={{backgroundImage: 'url(' + item.url + ')'}}
                                                >
                                                    <p>{item.title}</p>
                                                </div>

                                            </div>
                                        )
                                    }) : null
                            }

                        </div>

                        <div className="uk-flex-center" uk-grid="true">
                            <BtnDefault name="Загрузить еще..." getPosts={this.props.getAsyncPostsHandler} />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (props) => {
    return props;
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAsyncPostsHandler: (count) => {
            dispatch(getAsyncPosts(count));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sections);
