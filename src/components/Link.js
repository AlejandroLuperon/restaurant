import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import "./Navbar.css"

class Link extends Component {

  handleClick(path) {
    this.props.history.push(path)
  }
  render() {
    const { menuItems } = this.props;
    return (
      <div className="sidebar-item" href="#"  onClick={this.props.onClick.bind(this)}>
        <img src={this.props.src} />
        <div className="sidebar-item-text">
           {this.props.label}
        </div>
      </div>
    )
  }
}

export default Link;
