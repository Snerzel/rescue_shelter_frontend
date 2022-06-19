// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {connect} from 'react-redux'
import SheltersContainer from './containers/SheltersContainer';

class App extends React.Component {

  // componentDidMount() {
  //   this.props.fetchShelters()
  // }
  
  

  render() {
    return (
      <div className="App">
        <SheltersContainer/>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     shelters: state.shelters
//   }
// }

export default App;
