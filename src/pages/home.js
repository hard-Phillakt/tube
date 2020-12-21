import React from 'react';
import { connect } from 'react-redux';
import SectionsHome from '../components/sections/sectionsHome';
import { getAsyncFilmsAllAction } from '../actions/actionsHomes';
import Preloader from '../components/preloader/preloader';

class Home extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.setAsyncFilmsAllAction();
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
              <span>Новинки</span>
            </h1>

            <div className="uk-child-width-1-2@m" uk-grid="true">
              <div className="uk-child-width-1-1@m">

                <div className="uk-child-width-1-3@m uk-grid-match" uk-grid="true">
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

              <div className="uk-child-width-1-2@m uk-flex-right" uk-grid="true">



                <div>
                  <div className="uk-card uk-card-secondary uk-card-body">

                    <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                      <label><input className="uk-checkbox uk-margin-small-right" type="checkbox" /> КОМЕДИЯ</label>
                    </div>

                    <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                      <label><input className="uk-checkbox uk-margin-small-right" type="checkbox" /> УЖАСЫ</label>
                    </div>

                  </div>


                  <div>

                    <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slider="true" uk-slider="autoplay: true">
                      <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-1@m">

                        <li>
                          <img src="http://tube-serv/files/global/films/hobbit-one/poster/hobbit-one-poster.webp" alt="true" />
                          <div className="uk-position-center uk-panel"></div>
                        </li>

                        <li>
                          <img src="http://tube-serv/files/global/films/warcraft/poster/warcraft-poster.webp" alt="true" />
                          <div className="uk-position-center uk-panel"></div>
                        </li>

                        <li>
                          <img src="http://tube-serv/files/global/films/hobbit-one/poster/hobbit-one-poster.webp" alt="true" />
                          <div className="uk-position-center uk-panel"></div>
                        </li>

                      </ul>

                      <a className="uk-position-center-left uk-position-small uk-hidden-hover" uk-slidenav-previous="true" uk-slider-item="previous"></a>
                      <a className="uk-position-center-right uk-position-small uk-hidden-hover" uk-slidenav-next="true" uk-slider-item="next"></a>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

