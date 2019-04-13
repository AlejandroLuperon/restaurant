import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Reporting.css';

class Reporting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {}
    }
  }

  componentWillMounte(data) {
    fetch("http://localhost:8000/", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
      "Content-Type": "application/json"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(data),
    }).then((response) => {
      return response.json();
    }).then((data)=>{

    });
  }

  componentDidMount() {
    this.getResults();
  }

  getResults() {
    let json = [
      {"name": "Veggie Pizza", "datetime": 12334134},
      {"name": "Beer", "datetime": 122321},
      {"name": "Pepperoni Pizza", "datetime": 12334134},
      {"name": "Beer", "datetime": 122321},
      {"name": "Pepperoni Pizza", "datetime": 12334134},
      {"name": "Beer", "datetime": 122321}
    ];

    let map = {};

    json.forEach((item)=>{
      let name = item.name;
      if (map[name]) {
        map[name] = map[name] + 1;
      } else {
        map[name] = 1;
      }
    });

    this.setState({
      results: map
    })
  }

  render(){
    const {results} = this.state;
    return (
      <div>
        {
          Object.keys(results).map((key, index) => (
            <div key={index} className="d-flex flex-row row">
              <div className="col-3">{results[key]}</div>
              <div className="col-3">{key}</div>
            </div>
          ))
        }
      </div>
    )
  }
}
export default Reporting;
