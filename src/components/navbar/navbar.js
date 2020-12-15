import React from 'react';
import { connect } from 'react-redux';

import Home from '../../pages/home';
import Films from '../../pages/films';
import Serials from '../../pages/serials';
import Anime from '../../pages/anime';
import View from '../../pages/vf';
// import { getAsyncPosts, getAsyncFilms } from '../../actions/actions';
import { getAsyncFilms } from '../../actions/actionsFilms';

import './_navbar.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Navbar extends React.Component {

    render() {

        return (

            <Router>
                <header>
                    {/* uk-sticky="sel-target: .uk-container; cls-active: uk-navbar-sticky" */}
                    <div className="uk-section-secondary uk-light" >
                        <div className="uk-container uk-container-xlarge">
                            <nav className="uk-margin" uk-navbar="mode: hover">
                                <div className="uk-navbar-left">
                                    <ul className="uk-navbar-nav">
                                        <li className="link-home uk-active"
                                            onClick={() => {
                                                // this.props.getAsyncPostsHandler();
                                            }}
                                        ><Link to="/">goivi</Link></li>
                                        <li
                                            onClick={() => {
                                                this.props.getAsyncFilmsHandler();
                                            }}
                                        ><Link to="/films">Фильмы</Link></li>
                                        {/* <li
                                            onClick={() => {
                                                this.props.getAsyncPostsHandler('serialy');
                                            }}
                                        ><Link to="/serials">Сериалы</Link></li>
                                        <li
                                            onClick={() => {
                                                this.props.getAsyncPostsHandler('anime');
                                            }}
                                        ><Link to="/anime">Аниме</Link></li> */}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/films" component={Films} />
                    {/* <Route path="/serials" component={Serials} />
                    <Route path="/anime" component={Anime} /> */}
                    <Route path="/vf/:genre/:id/:slug" component={View} />
                </Switch>

            </Router>
        )
    }
}

const mapStateToProps = (props) => {
    return props;
}


const mapDispatchToProps = (dispatch) => {
    return {
        // getAsyncPostsHandler: (count) => {
        //     dispatch(getAsyncPosts(count));
        // },
        getAsyncFilmsHandler: (count) => {
            dispatch(getAsyncFilms(count));
        }
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Navbar);