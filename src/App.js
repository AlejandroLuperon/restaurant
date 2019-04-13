import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {

  }

  render() {
    return (
      <div>Hello world.</div>
    );
  }
}
export default App;
