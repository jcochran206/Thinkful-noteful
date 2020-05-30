import React from 'react';
import './App.css';
import { Route, Link, Switch} from 'react-router-dom';
import Header from './Header'

class App extends React.Component {
  state = {
    arr: [],
  }
  render() {
    return (
      <div className="App">
      <Header/>

      {/* <Route exact path='/' component={}/> */}
      </div>
    );
  }
}

export default App;