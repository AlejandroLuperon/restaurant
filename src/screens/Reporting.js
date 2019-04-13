import React, { Component } from 'react';
import Calendar from '../components/Calendar'
import './Reporting.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Apr 12', Dinner: 4000, Breakfast: 2400, amt: 2400,
  },
  {
    name: 'Apr 13', Dinner: 3000, Breakfast: 1398, amt: 2210,
  },
  {
    name: 'Apr 14', Dinner: 2000, Breakfast: 9800, amt: 2290,
  },
  {
    name: 'Apr 15', Dinner: 2780, Breakfast: 3908, amt: 2000,
  },
  {
    name: 'Apr 16', Dinner: 1890, Breakfast: 4800, amt: 2181,
  },
  {
    name: 'Apr 17', Dinner: 2390, Breakfast: 3800, amt: 2500,
  },
  {
    name: 'Apr 18', Dinner: 3490, Breakfast: 4300, amt: 2100,
  },
];


class Reporting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  componentWillMount() {
    this.getReport(null);
  }

  getReport(query) {
    let path = "orders?vendor_id=1"
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
      //console.log("response", response.json());
      return response.json();
    }).then((data) => {
      this.setState({
        results: data
      });
    });
  }

  onChangeStartDate(value) {
    this.setState({
      start_date: value.valueOf()
    }, () => {
      let query = this.getQuery();
      this.getReport(query);
    });
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

  render() {
    return (
      <div className="container">
        <div className="flex-row d-flex reporting-header">
          <div className="flex-column d-flex align-items-start justify-content-center">
            <label className="calendar-label">Search</label>
            <input
              className="form-control"
              name="query"
              onChange={this.onChangeQuery.bind(this)}
              value={this.state.query} />
          </div>
          <Calendar
            onChange={this.onChangeStartDate.bind(this)}
            label="Start Date"
            size="full" />
          <Calendar
            onChange={this.onChangeEndDate.bind(this)}
            label="End Date"
            size="full" />
        </div>
        <div className="row statistics-row">
          <div className="col-8">
            <div className="card linechart-card">
              <div className="card-header">
                Daily Earnings
            </div>
              <div className="card-body">
                <ResponsiveContainer width={600} height={300}>

                  <LineChart
                    data={data}
                    margin={{
                      top: 5, right: 30, left: 20, bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Breakfast" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Dinner" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
          <div className="col-4">
            <div className="card expense-card" style={{ marginBottom: "40px" }}>
              <div className="card-header">
                Expenses
                </div>
              <div className="card-body">
                <p>Weekly</p>
                <h4>$2008</h4>
              </div>
            </div>
            <div className="card expense-card">
              <div className="card-header">
                Expenses
                </div>
              <div className="card-body">
                <p>Monthly</p>
                <h4>$7392</h4>
              </div>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="card dishes-card">
              <div className="card-header">
                Best Performing Dishes
                </div>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">DISHES</th>
                      <th scope="col">ORDERED</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.results.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.count}</td>
                        </tr>
                      )
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card dishes-card">
              <div className="card-header">
                Worst Performing Dishes
                </div>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">DISHES</th>
                      <th scope="col">ORDERED</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.results.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.count}</td>
                        </tr>
                      )
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card chef-card">
              <div className="card-header">
                Chef of the month
                </div>
              <div className="card-body">
               <img src="https://atlantahomesmag.com/wp-content/uploads/2018/08/Chef-Pano-I.-Karatassos.jpg" />
               <h3>John Doe</h3>
               <p>300 dishes created</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default Reporting;
