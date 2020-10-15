import React from 'react';
import { connect } from 'react-redux';
import Section from '../components/sections/sections';
import { getAsyncPosts } from '../actions/actions';


class Home extends React.Component {

  constructor(props){
    super(props);

    this.list = ['Улетный TRIP', 'Пол-литровая мышь', '38 обезьян', 'Робоцып', 'Металлопокалипсис', 'Тюряга'];
  }

  componentDidMount(){

    if(this.props.posts.data.length <= 0){
      this.props.getAsyncPostsHandler(5);
    }
  }

  render() {

    return (
      <section className="home">

        {
          
          this.list.map((item, i) => {
            
              return (
                <Section title={item} key={item + i} dataPosts={this.props.posts.data} />
              )
          })

        }

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

