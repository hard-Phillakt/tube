import React from 'react';
import { connect } from 'react-redux';

import Home from '../../pages/home';
import About from '../../pages/about';
import Gallery from '../../pages/gallery';
import Page from '../../pages/page';

import './navbar.scss';

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
                    <div className="uk-section-secondary uk-light">
                        <div className="uk-container uk-container-xlarge">
                            <nav className="uk-margin" uk-navbar="mode: hover">
                                <div className="uk-navbar-left">
                                    <ul className="uk-navbar-nav">
                                        <li className="uk-active"><Link to="/">Главная</Link></li>
                                        <li><Link to="/about">Сериалы</Link></li>
                                        <li><Link to="/gallery">Мультфильмы</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/page/:id" component={Page} />
                </Switch>

            </Router>
        )
    }
}

const mapStateToProps = (props) => {
    return props;
}

export default connect(mapStateToProps, null)(Navbar);