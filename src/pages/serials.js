import React from 'react';
import { connect } from 'react-redux';
import Section from '../components/sections/sections';
import Preloader from '../components/preloader/preloader';
import { getAsyncPosts } from '../actions/actions';

class Serials extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.props.getAsyncPostsHandler('serialy');
    }

    render() {

        return (
            <section className="design">

                {

                    this.props.posts.data.items ?

                        this.props.posts.data.items.map((item, i) => {

                            return (
                                <Section title={item.title} key={item.title} dataPosts={item} />
                            )

                        })
                        :
                        <Preloader />

                }

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


export default connect(mapStateToProps, mapDispatchToProps)(Serials);

