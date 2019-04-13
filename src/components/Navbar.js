import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import ActiveOrders from '../screens/ActiveOrders/ActiveOrders';
import Menu from '../screens/Menu/Menu';
import "./Navbar.css"

class Navbar extends Component {

  handleClick(path) {
    this.props.history.push(path)
  }
  render() {
    const { menuItems } = this.props;
    return (
      <div className="row margin-0" >
        <div className="col-2 padding-0">
          <nav className=" sidebar" style={{ maxHeight: window.innerHeight, height: "100%" }}>
            {/* <div className="oval"></div> */}
            <div className="sidebar-item sidebar-logo" href="#">
              <div className="sidebar-item-logo">
                FOODBAR
              </div>
            </div>

            <div className="sidebar-item" href="#">
              <div className="sidebar-item-text active" onClick={() => this.handleClick("/active-orders")}>
               Dashboard
              </div>
            </div>

            <div className="sidebar-item" href="#"  onClick={() => this.handleClick("/reporting")}>
              <div className="sidebar-item-text">
               Reporting
              </div>
            </div>

            <div className="sidebar-item" href="#"  onClick={() => this.handleClick("/menu")}>
              <div className="sidebar-item-text">
               Menu Management
              </div>
            </div>

            <div className="sidebar-item" href="#"  onClick={() => this.handleClick("/staff")}>
              <div className="sidebar-item-text">
               Staff Management
              </div>
            </div>
          </nav>
        </div>
        <div className="col-10 padding-0">
          <nav className="navbar navbar-expand-lg">
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                {
                  menuItems.map(item => (
                    <li key={item.path} className="nav-item" onClick={() => this.handleClick(item.path)}>
                      <a className="nav-link">{item.name}<span className="sr-only">(current)</span></a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </nav>
          <div class="content" style={{ minHeight: window.innerHeight }}>

            <Route path="/active-orders" component={ActiveOrders} />
            <Route path="/menu" component={Menu} />
          </div>
        </div>


      </div>

    )
  }
}

export default withRouter(Navbar);