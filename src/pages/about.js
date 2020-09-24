import React from 'react';
import { connect } from 'react-redux';
import Section from '../components/sections';


class About extends React.Component {


  render() {

    return (
      <div className="about">
        <Section title="Section about" />
      </div>
    )
  }
}

const mapStateToProps = props => (props);

export default connect(mapStateToProps, null)(About);

