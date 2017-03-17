import React, { Component } from 'react';
import './App.css';
import Input from './components/Input'
import VisibleList from './components/VisibleList'
import Filter from './components/Filter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <VisibleList />
        <Filter />
      </div>
    );
  }
}

export default App;
