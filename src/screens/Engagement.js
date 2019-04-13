import React, { Component } from 'react';
import './Engagement.css';

class Engagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patrons: []
    }
  }

  componentWillMount() {
    this.getReport(null);
  }

  getReport(query) {
    let path = "patrons"
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
      this.setState({
        patrons: data
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <button>Start Campaign</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.patrons.map((item, index) => (
                  <tr key={index}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td><button>Action</button></td>
                  </tr>
                )
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}
export default Engagement;
