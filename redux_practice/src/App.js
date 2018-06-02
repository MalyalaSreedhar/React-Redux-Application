import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UsersInformation from './components/UsersInformation'
import User from './components/IndividualUser';
import UserForm from './components/UserForm';
import ReactRouting from './components/RoutingHandling';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ReactRouting/>
        {/*<UsersInformation/>*/}
        {/*<hr/>
        <User/>
        <hr/>*/}
        {/*<UserForm/>*/}
      </div>
    );
  }
}

export default App;
