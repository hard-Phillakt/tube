import React from 'react';
import { connect } from 'react-redux';
import Section from '../components/sections/sections';
import Preloader from '../components/preloader/preloader';
import { getAsyncPosts } from '../actions/actions';


class Films extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.getAsyncPostsHandler('filmy');
  }

  render() {

    return (
      <section className="films">

        {

          this.props.posts.data.items ?

            this.props.posts.data.items.map((item, i) => {

              return (
                //  Делаем рендер компонента и проверяем наличие постов в категории
                <Section 
                title={item.title} 
                key={item.title} 
                dataPosts={item.films.length ? item : false} 
                viewBtnLoader={item.films.length ? true : false}/>
              )

            })
            : 
            <Preloader />
            
        }

      </section>
    )
  }
}

const mapStateToProps = props => {
  return props;
};


const mapDispatchToProps = (dispatch) => {
  return {
    getAsyncPostsHandler: (count) => {
      dispatch(getAsyncPosts(count));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Films);

