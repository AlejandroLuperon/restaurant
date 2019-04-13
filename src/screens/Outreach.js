import React, { Component } from 'react';
import './Outreach.css';

class Outreach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  render(){
    return (
      <div className="container">
        <button>Start campaign</button>
      </div>
    )
  }
}
export default Outreach;
