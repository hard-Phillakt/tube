import React from 'react';
import { connect } from 'react-redux';
import SectionFilms from '../components/sections/sectionsFilms';
import Preloader from '../components/preloader/preloader';
import { getAsyncFilms } from '../actions/actions';


class Films extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.getAsyncFilmsHandler();
  }

  render() {

    return (
      <section className="films">

        {

          this.props.films.filmsAllFromAllGenres ?

            this.props.films.filmsAllFromAllGenres.map((item, i) => {

              return (
                //  Делаем рендер компонента и проверяем наличие постов в категории
                <SectionFilms 
                title={item.title} 
                key={item.title} 
                filmsGenres={item ? item : false} 
                viewBtnLoader={item ? true : false}
                />
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
    getAsyncFilmsHandler: (count) => {
      dispatch(getAsyncFilms(count));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Films);

