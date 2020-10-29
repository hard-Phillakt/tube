import React from 'react';
import { connect } from 'react-redux';
import Section from '../components/sections/sections';
import { getAsyncPosts } from '../actions/actions';


class Home extends React.Component {


  componentDidMount(){

    if(this.props.posts.data.length <= 0){
      this.props.getAsyncPostsHandler(5);
    }    
  }

  render() {

    return (
      <section className="home">

        <Section title="Улетный TRIP" getPosts={this.props.getAsyncPostsHandler} dataPosts={this.props.posts.data} />

        <Section title="Пол-литровая мышь" />

      </section>
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

