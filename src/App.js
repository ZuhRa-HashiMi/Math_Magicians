import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>
      </div>
    );
  }
}
