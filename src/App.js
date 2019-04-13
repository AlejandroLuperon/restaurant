import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ActiveOrders from './screens/ActiveOrders';
import Reporting from './screens/Reporting';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {

  }

  render() {
    return (
      <Router>
        <Route path="/active-orders" component={ActiveOrders} />
        <Route path="/reporting" component={Reporting} />
      </Router>
    );
  }
}
export default App;
