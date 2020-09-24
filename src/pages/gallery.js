import React from 'react';
import { connect } from 'react-redux';
import Section from '../components/sections';
import { getAsyncPosts } from '../actions/actions';

class Gallery extends React.Component {


    render() {

        return (
            <div className="gallery">

                <Section title="Section gallery one" />

                <Section title="Section gallery two" getPosts={this.props.getAsyncPostsHandler} dataPosts={this.props.posts.data} />

            </div>
        )
    }
}

const mapStateToProps = props => (props);

const mapDispatchToProps = (dispatch) => {
    return {
        getAsyncPostsHandler: (count) => {
            dispatch(getAsyncPosts(count));
        }
    };
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

