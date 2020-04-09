import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    NumberOfEvents: 30,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ NumberOfEvents: value });
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <label>Number of events:</label>
        <input
          type="text"
          id="NumberOfEvents-input"
          value={this.state.NumberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
