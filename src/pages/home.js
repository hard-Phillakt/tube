import React from 'react';
import { connect } from 'react-redux';
import Section from '../components/sections';
import { getAsyncPosts } from '../actions/actions';


class Home extends React.Component {


  render() {

    return (
      <div className="home">

        <Section title="Section one" getPosts={this.props.getAsyncPostsHandler} dataPosts={this.props.posts.data} />

        <Section title="Section two" dataPosts={this.props.posts.data} />

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

