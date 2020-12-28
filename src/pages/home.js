import React from 'react';
import { connect } from 'react-redux';
import SectionsHome from '../components/sections/sectionsHome';
import SectionsHomeFilter from '../components/sections/sectionsHomeFilter';
import DescriptionBrief from '../components/description-brief/descriptionBrief';
import {
  getAsyncFilmsAllAction,
  getAsyncFilms,
  getAsyncFilterFilmsFromGenres
} from '../actions/actionsHomes';

import Preloader from '../components/preloader/preloader';

class Home extends React.Component {

  // constructor(props) {
  //   super(props);

  // }

  componentDidMount() {
    this.props.setAsyncFilmsAllAction();

    this.props.getAsyncFilmsHandler();
  }

  render() {

    return (

      <section className="home">
      
        <div className="uk-section">
          <div className="uk-container">

            <h1 className="
                uk-heading-line 
                uk-heading-medium 
                uk-padding 
                uk-padding-remove-left
                uk-padding-remove-top
                tb-title__h1
                ">
              <span>Премьеры</span>
            </h1>


            <div className="uk-child-width-1-1@m" uk-grid="true">

              <div className="uk-child-width-1-5@m uk-grid-match" uk-grid="true">
                {

                  this.props.films.filmsAll ?

                    this.props.films.filmsAll.map((item, i) => {

                      return (

                        <SectionsHome key={item.slug} filmsAllItems={item} />

                      )

                    })
                    :
                    <Preloader />
                }
              </div>

            </div>


            <h2 className="
                uk-heading-line 
                uk-heading-medium 
                uk-padding 
                uk-padding-remove-left
                uk-padding-remove-top
                tb-title__h1
                ">
              <span>Фильтр</span>
            </h2>

            <div className="uk-card uk-card-secondary uk-card-body uk-margin-medium-bottom">

              <div className="uk-column-1-2@s uk-column-1-3@m uk-column-1-4@l">
                {
                  this.props.films.filmsAllFromAllGenres ?
                    this.props.films.filmsAllFromAllGenres.map((item, i) => {
                      return (
                        <div className="uk-flex"
                          key={item.slug}
                        >
                          <label>
                            <input className="uk-radio uk-margin-small-right" type="radio" name="failter-films-for-genres"
                              onChange={() => {
                                this.props.setAsyncFilterFilmsFromGenres(item);
                              }}
                            /> {item.title}
                          </label>
                        </div>
                      )
                    })
                    :
                    null
                }

              </div>

            </div>

            <div className="uk-child-width-1-1@m" uk-grid="true">

              {/* Фильмы по фильтру */}

              <div className="uk-child-width-1-5@m uk-grid-match" uk-grid="true">
                {

                  this.props.films.filterFilmsFromGenresHome.films_to_genres ?

                    this.props.films.filterFilmsFromGenresHome.films_to_genres.map((item, i) => {

                      const genre = {
                        id: this.props.films.filterFilmsFromGenresHome.id,
                        slug: this.props.films.filterFilmsFromGenresHome.slug
                      };

                      return (

                        <SectionsHomeFilter
                          key={item.slug}
                          filterFilmFromGenres={item}
                          genre={genre}
                        />

                      )

                    })
                    :
                    null
                }
              </div>

            </div>

          </div>

          {/* <div className="uk-section">
            <div className="uk-container">

              <h2 className="
                uk-heading-line 
                uk-heading-medium 
                uk-padding 
                uk-padding-remove-left
                uk-padding-remove-top
                tb-title__h1
                ">
                <span>Популярное</span>
              </h2>

              <div className="uk-child-width-1-1@m">
                <div className="uk-position-relative uk-visible-toggle uk-light" uk-slider="true">

                  <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-5@m uk-grid">

                    <li>
                      <div className="uk-panel">
                        <img src="http://tube-serv/files/global/films/hobbit-one/poster/hobbit-one-poster.webp" alt="true" />
                      </div>
                    </li>

                    <li>
                      <div className="uk-panel">
                        <img src="http://tube-serv/files/global/films/hobbit-one/poster/hobbit-one-poster.webp" alt="true" />
                      </div>
                    </li>

                    <li>
                      <div className="uk-panel">
                        <img src="http://tube-serv/files/global/films/hobbit-one/poster/hobbit-one-poster.webp" alt="true" />
                      </div>
                    </li>


                    <li>
                      <div className="uk-panel">
                        <img src="http://tube-serv/files/global/films/hobbit-one/poster/hobbit-one-poster.webp" alt="true" />
                      </div>
                    </li>


                    <li>
                      <div className="uk-panel">
                        <img src="http://tube-serv/files/global/films/hobbit-one/poster/hobbit-one-poster.webp" alt="true" />
                      </div>
                    </li>

                  </ul>

                  <a className="uk-position-center-left uk-position-small uk-hidden-hover" uk-slidenav-previous="true" uk-slider-item="previous"></a>
                  <a className="uk-position-center-right uk-position-small uk-hidden-hover" uk-slidenav-next="true" uk-slider-item="next"></a>

                </div>
              </div>

            </div>
          </div> */}

          {/* <div className="uk-section">
            <div className="uk-container">
              <div className="uk-child-width-1-2@m">
                  
              </div>
            </div>
          </div> */}


        </div>
      </section>
    )
  }
}

const mapStateToProps = props => {
  return props;
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAsyncFilmsAllAction: () => {
      dispatch(getAsyncFilmsAllAction());
    },
    getAsyncFilmsHandler: (count) => {
      dispatch(getAsyncFilms(count));
    },
    setAsyncFilterFilmsFromGenres: (item) => {
      dispatch(getAsyncFilterFilmsFromGenres(item));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

