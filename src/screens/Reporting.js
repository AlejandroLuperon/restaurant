import React, { Component } from 'react';
import Calendar from '../components/Calendar'
import './Reporting.css';

class Reporting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {}
    }
  }

  getReport(query) {
    let path = "orders"
    let url = "http://54.166.71.233/" + path;

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
    this.getReport();
  }
  
  onChangeStartDate(value) {
    this.setState({
      start_date: value.valueOf()
    })
    let query = this.getQuery();
    this.getReport(query);
  }

  getQuery() {
    let params = [];
    let query = null;
    if (this.state.start_date != null) {
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
      end_date: value.valueOf()
    }, () => {
      let query = this.getQuery();
      this.getReport(query);
    })
  }

  onChangeQuery(event) {
    this.setState({
      [event.target.name]: [event.target.value]
    }, () => {
      let query = this.getQuery();
      this.getReport(query);
    });
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
        <table className="table">
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
