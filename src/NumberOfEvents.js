import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
    if (value <= 0) {
      this.setState({
        infoText: "The value must be at least 1",
      });
    } else {
      this.setState({
        infoText: "",
      });
      this.props.updateEvents(null, null, value);
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <div className="text-alert">
          <ErrorAlert text={this.state.infoText} />
        </div>
        <label>Number of results</label>
        <input
          type="text"
          id="NumberOfEventsInput"
          placeholder="32"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
