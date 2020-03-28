import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './container/ErrorBoundries'
import Header from './Presentational/Header'
import Routes from './routes'

const navItems = [
  {
    id: 'home',
    path: '/'
  },
  {
    id: 'Todo',
    path: '/todo'
  },
  {
    id: 'Login',
    path: '/login'
  }
]

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <ErrorBoundary >
        <Header items={navItems} />
        <Routes />
      </ErrorBoundary>
    );
  }
}

export default App;
