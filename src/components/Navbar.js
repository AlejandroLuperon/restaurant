import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import ActiveOrders from '../screens/ActiveOrders/ActiveOrders';
// import Reporting from '../screens/Reporting';
import Menu from '../screens/Menu/Menu';
import logo from '../assets/logo.png';
import Link from './Link';
import Reporting from '../screens/Reporting';
import "./Navbar.css"
import one from '../assets/navbar/1.svg';
import reporting from '../assets/navbar/reporting.svg';
import dashboard from '../assets/navbar/dashboard.svg';
import four from '../assets/navbar/4.svg';
import five from '../assets/navbar/5.svg';

class Navbar extends Component {

  handleClick(path) {
    this.props.history.push(path)
  }
  render() {
    const { menuItems } = this.props;
    return (
      <div className="row margin-0" >
        <div className="col-2 padding-0">
          <nav className=" sidebar sidebar-container" style={{ maxHeight: window.innerHeight, height: "100%" }}>
            <div className="sidebar-item sidebar-logo" href="#">
              <img src={logo} />
              <div className="sidebar-item-logo">
                FOOD BAR
              </div>
            </div>
            <div style={{paddingLeft: '35px', paddingRight: '45px', paddingTop: '30px'}}>
              <Link src={dashboard} onClick={() => this.handleClick("/active-orders")} label="Dashboard" />
              <Link src={reporting} onClick={() => this.handleClick("/reporting")} label="Reporting" />
              <Link src={one} onClick={() => this.handleClick("/menu")} label="Menu Management" />
              <Link src={four} onClick={() => this.handleClick("/staff")} label="Staff Management" />
            </div>
          </nav>
        </div>
        <div className="col-10 padding-0">
          <nav className="navbar navbar-expand-lg">
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}

            <div style={{height: '40px'}} className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto"><li className="nav-item"></li>
                {
                  /*menuItems.map((item, index) => (
                    <li key={index} className="nav-item" onClick={() => this.handleClick(item.path)}>
                      <a className="nav-link">{item.name}<span className="sr-only">(current)</span></a>
                    </li>
                  ))*/
                }
              </ul>
            </div>
          </nav>
          <div className="content" style={{ minHeight: window.innerHeight }}>

            <Route path="/active-orders" component={ActiveOrders} />
            <Route path="/menu" component={Menu} />
            <Route path="/reporting" component={Reporting} />
          </div>
        </div>


      </div>

    )
  }
}

export default withRouter(Navbar);
