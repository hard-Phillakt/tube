import React from 'react';
import { connect } from 'react-redux';



class Navbar extends React.Component {

    render() {

        return (
            <div className="uk-container">
                <nav className="uk-navbar-container uk-margin" uk-navbar="mode: hover">
                    <div className="uk-navbar-left">
                        {/* <ul className="uk-navbar-nav">
                            <li className="uk-active"><a href="#">Active</a></li>
                            <li>
                                <a href="#">Parent</a>
                                <div className="uk-navbar-dropdown">
                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                        <li className="uk-active"><a href="#">Active</a></li>
                                        <li><a href="#">Item</a></li>
                                        <li><a href="#">Item</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#">Item</a>
                                <div className="uk-navbar-dropdown uk-navbar-dropdown-width-2">
                                    <div className="uk-navbar-dropdown-grid uk-child-width-1-2" uk-grid="true">
                                        <div>
                                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                                <li className="uk-active"><a href="#">Active</a></li>
                                                <li><a href="#">Item</a></li>
                                                <li className="uk-nav-header">Header</li>
                                                <li><a href="#">Item</a></li>
                                                <li><a href="#">Item</a></li>
                                                <li className="uk-nav-divider" />
                                                <li><a href="#">Item</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                                <li className="uk-active"><a href="#">Active</a></li>
                                                <li><a href="#">Item</a></li>
                                                <li className="uk-nav-header">Header</li>
                                                <li><a href="#">Item</a></li>
                                                <li><a href="#">Item</a></li>
                                                <li className="uk-nav-divider" />
                                                <li><a href="#">Item</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul> */}
                    </div>
                </nav>
            </div>


        )
    }
}

const mapStateToProps = (props) => {
    return props;
}

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);