import React, { Component } from "react";
import "./App.css";

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents } from "./api";
import { OfflineAlert, WarningAlert } from "./Alert";

class App extends Component {
  state = {
    events: [],
    page: null,
    lat: null,
    lon: null,
    infoText: "",
    offlineText: "",
  };

  //loading events based on location, no lat/lon at first load.
  componentDidMount() {
    this.updateEvents();
    this.noEvent();
    window.addEventListener("online", this.offLineAlert());
  }

  offLineAlert = () => {
    if (navigator.onLine === false) {
      this.setState({
        offlineText:
          "You appear to be offline, this list is now cached. Please reconnect for an updated list.",
      });
    } else {
      this.setState({
        offlineText: "",
      });
    }
  };

  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then((response) =>
        this.setState({ events: response, lat, lon })
      );
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then((response) =>
        this.setState({ events: response, page })
      );
    } else {
      getEvents(
        this.state.lat,
        this.state.lon,
        this.state.page
      ).then((response) => this.setState({ events: response }));
    }
  };

  noEvent = () => {
    if (this.state.events.length === 0) {
      this.setState({
        infoText: "No events found here.",
      });
    } else {
      this.setState({
        infoText: "",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <OfflineAlert text={this.state.offlineText} />
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.events.length}
          lat={this.state.lat}
          lon={this.state.lon}
        />
        {this.state.noEvent && <WarningAlert text={this.state.infoText} />}
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
