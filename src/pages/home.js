import React from 'react';
import { connect } from 'react-redux';
import Section from '../components/sections/sections';
import { getAsyncPosts } from '../actions/actions';
import Preloader from '../components/preloader/preloader';

class Home extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

    this.props.getAsyncPostsHandler('popular');
  }

  render() {

    return (
      // <Section title="Section Home" />

      <section className="home">
        {

          this.props.films.filmsAllFromAllGenres ?

          this.props.films.filmsAllFromAllGenres.map((item, i) => {

              return (
                <Section title={item.title} key={item.title} dataPosts={item} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

