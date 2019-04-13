import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {

  handleClick(path) {
    this.props.history.push(path)
  }
  render() {
    const { menuItems } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Foobar</a>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
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
    )
  }
}

export default withRouter(Navbar);