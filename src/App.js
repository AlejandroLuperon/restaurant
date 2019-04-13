import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActiveOrders from './screens/ActiveOrders/ActiveOrders';
import Reporting from './screens/Reporting';
import Menu from './screens/Menu/Menu';
import Navbar from './components/Navbar';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {

  }

  render() {
    const menuItems = [
      { name: "Active Orders", path: "/active-orders" },
      { name: "Reporting", path: "/reporting" },
      { name: "Menu", path: "/menu" }
    ]
    return (
      <div>
        <Router>
          <Navbar menuItems={menuItems} />
        </Router>
      </div>

    );
  }
}
export default App;
