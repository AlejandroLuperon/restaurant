import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ActiveOrders from './screens/ActiveOrders';
import Reporting from './screens/Reporting';
import Engagement from './screens/Engagement';
import Outreach from './screens/Outreach';
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
        <Route path="/engagement" component={Engagement} />
        <Route path="/outreach" component={Outreach} />
      </Router>
    );
  }
}
export default App;
