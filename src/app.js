import React from 'react';
import { connect } from 'react-redux';
import Section from './components/sections';
import Navbar from './components/navbar';

import uikit from '../node_modules/uikit/dist/js/uikit.js';
import '../node_modules/uikit/dist/css/uikit.css';


class App extends React.Component {


  render() {

    return (
      <div className="app">

        <Navbar />

        <Section />

        <Section />

      </div>
    )
  }
}

const mapStateToProps = (props) => {
  return props;
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

