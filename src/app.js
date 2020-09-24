import React from 'react';
import { connect } from 'react-redux';
import Navbar from './components/navbar';

class App extends React.Component {


  render() {

    return (
      <React.Fragment>
        <header>
          <Navbar />
        </header>


        <footer>

        </footer>
      </React.Fragment>
    )
  }
}

const mapStateToProps = props => (props);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getAsyncPostsHandler: (count) => {
//       dispatch(getAsyncPosts(count));
//     }
//   };
// };

export default connect(mapStateToProps, null)(App);

