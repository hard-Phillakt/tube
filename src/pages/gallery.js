import React from 'react';
import { connect } from 'react-redux';
import Section from '../components/sections/sections';
import { getAsyncPosts } from '../actions/actions';

class Gallery extends React.Component {


    render() {

        return (
            <section className="gallery">

                <Section title="Section gallery one" />

            </section>
        )
    }
}

const mapStateToProps = props => (props);

const mapDispatchToProps = (dispatch) => {
    return {
        getAsyncPostsHandler: (count) => {
            dispatch(getAsyncPosts(count));
        }
    };
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

