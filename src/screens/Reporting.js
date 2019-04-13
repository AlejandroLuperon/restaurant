import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/Calendar'
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

  onChangeStartDate() {

  }

  onChangeEndDate() {

  }

  query() {
    return {
      start_date: (this.state.start_date == null ? null : this.state.start_date),
      end_date: (this.state.end_date == null ? null : this.state.end_date),
      item: (this.state.item == null ? null : this.state.item)
    }
  }

  render(){
    const {results} = this.state;
    return (
      <div>
        <div class="flex-row d-flex">
          <Calendar
            onChange={this.onChangeStartDate.bind(this)}
            label="Start Date"
            size="full"/>
          <Calendar
            onChange={this.onChangeEndDate.bind(this)}
            label="End Date"
            size="full"/>
        </div>
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
      </div>
    )
  }
}
export default Reporting;
