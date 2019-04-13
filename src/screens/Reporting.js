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
    this.getReport(null);
  }

  getReport(query) {
    let url = "http://3.82.213.92/Project/" + "orders";

    if (query != null) {
      url = url + "?" + query;
    }
    fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
      "Content-Type": "application/json"
      },
      redirect: "follow",
      referrer: "no-referrer"
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
    });
  }

  onChangeStartDate(value) {
    this.setState({
      start_date: new Date(value.format("YYYY-MM-DDTHH:mm:ssZ"))
    })
    let query = this.getQuery();
    this.getReport(query);
  }

  getQuery() {
    let params = [];
    let query = null;
    if (this.state.start_date = null) {
      params.push("start_date=" + this.state.start_date);
    }

    if (this.state.end_date != null) {
      params.push("end_date=" + this.state.end_date);
    }

    if (this.state.query != null) {
      params.push("query=" + this.state.query);
    }


    if (params.length > 0) {
      query = params.join("&")
    }
    return query;
  }

  onChangeEndDate(value) {
    this.setState({
      end_date: new Date(value.format("YYYY-MM-DDTHH:mm:ssZ"))
    })
    let query = this.getQuery();
    this.getReport(query);
  }

  onChangeQuery(event) {
    this.setState({
      [event.target.name]: [event.target.value]
    })
    let query = this.getQuery();
    this.getReport(query);
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
      <div className="container">
        <div className="flex-row d-flex reporting-header">
          <div className="flex-column d-flex align-items-start justify-content-center">
            <label>Search</label>
            <input
              name="query"
              onChange={this.onChangeQuery.bind(this)}
              value={this.state.query} />
          </div>
          <Calendar
            onChange={this.onChangeStartDate.bind(this)}
            label="Start Date"
            size="full"/>
          <Calendar
            onChange={this.onChangeEndDate.bind(this)}
            label="End Date"
            size="full"/>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col"># Of Purchases</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(results).map((key, index) => (
                <tr key={index}>
                  <td>{results[key]}</td>
                  <td>{key}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
    )
  }
}
export default Reporting;
