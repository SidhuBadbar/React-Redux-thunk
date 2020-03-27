import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoOuter from './container/todoOuter';
import ErrorBoundary from './container/ErrorBoundries'
import Header from './Presentational/Header'

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <ErrorBoundary >
        <Header />
        <TodoOuter />
      </ErrorBoundary>
    );
  }
}

export default App;
