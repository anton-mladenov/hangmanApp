import React, { Component } from 'react';
import hangman from './hangman.svg';
import './App.css';
import { Provider } from "react-redux"
import store from "./store.js"
import { Route } from 'react-router-dom'
import PlayTheGameContainer from "./components/PlayTheGameContainer"
import Welcome from "./components/WelcomeContainer"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={hangman} className="App-logo" alt="logo" />
          <h1 className="App-title"> React-Redux Hangman App </h1>
        </header>
          <Route exact path="/" component={ Welcome } />
          <Route exact path="/hangman" component={ PlayTheGameContainer } />
      </div>
      </Provider>
    );
  }
}

export default App;
