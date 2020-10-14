import React from 'react';
import { connect } from 'react-redux';
import Section from '../components/sections/sections';


class About extends React.Component {


  render() {

    return (
      <section className="about">

        <Section title="Section about" />

      </section>
    )
  }
}

const mapStateToProps = props => (props);

export default connect(mapStateToProps, null)(About);

