import Datetime from 'react-datetime'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Calendar.css';

class Calendar extends Component {
  static propTypes = {
    label: PropTypes.string
  }

  static defaultProps = {
    value: "",
    error: false,
    size: "md"
  }

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      active: false,
      date: null,
      focused: false
    };
  }

  handleChange(event) {
    if (this.props.handleChange != null) {
      this.props.handleChange(event.target.value);
    }
  }

  getLabel() {
    if (this.props.label == null || this.props.label == "") {
      return;
    }

    return (
      <label className="calendar-label">{this.props.label}</label>
    );
  }

  getBase() {

    let className = ["textfield"];

    className = (this.props.size == "full" ? className.concat(["textfield-full"]) : className);
    className = (this.props.size == "md" ? className.concat(["textfield-md"]) : className);
    className = className.join(" ")
    return (<Datetime
      onChange={this.props.onChange.bind(this)}
      inputProps={{ className: "form-control" , readOnly: true}} />);
      /*return (<SingleDatePicker
        block={true}
        numberOfMonths={1}
        date={this.state.date} // momentPropTypes.momentObj or null
        onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
        focused={this.state.focused} // PropTypes.bool
        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
        id="your_unique_id" // PropTypes.string.isRequired,
      />)*/
  }

  render() {
    let containerClassName = [];
    containerClassName = (this.props.size == "full" ? containerClassName.concat(["textfield-container-full"]) : containerClassName);
    containerClassName = (this.props.size == "md" ? containerClassName.concat(["textfield-container-md"]) : containerClassName);

    return (
      <div className={containerClassName.join(" ")}>
        {this.getLabel()}
        {this.getBase()}
        <div className={this.props.error ? "textfield-error-container" : "textfield-hidden" }>
          <div className="textfield-error">{this.props.errorMessage}</div>
        </div>
      </div>
    );
  }
}

export default Calendar;
