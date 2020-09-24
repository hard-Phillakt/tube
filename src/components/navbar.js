import React from 'react';
import { connect } from 'react-redux';

import Home from '../pages/home';
import About from '../pages/about';
import Gallery from '../pages/gallery';

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
                <div className="uk-container">
                    <nav className="uk-navbar-container uk-margin" uk-navbar="mode: hover">
                        <div className="uk-navbar-left">
                            <ul className="uk-navbar-nav">
                                <li className="uk-active"><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/gallery">Gallery</Link></li>
                                <li>
                                    <Link to="#">Parent</Link>
                                    <div className="uk-navbar-dropdown">
                                        <ul className="uk-nav uk-navbar-dropdown-nav">
                                            <li className="uk-active"><Link to="#">Active</Link></li>
                                            <li><Link to="#">Item</Link></li>
                                            <li><Link to="#">Item</Link></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/gallery">
                        <Gallery />
                    </Route>
                </Switch>

            </Router>
        )
    }
}

const mapStateToProps = (props) => {
    return props;
}

export default connect(mapStateToProps, null)(Navbar);