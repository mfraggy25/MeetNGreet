import React, { Component } from "react";
import "./App.css";

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents } from "./api";
import { OfflineAlert } from "./Alert";

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

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.events.length}
          lat={this.state.lat}
          lon={this.state.lon}
        />
        <EventList events={this.state.events} />
        <OfflineAlert text={this.state.offlineText} />
      </div>
    );
  }
}

export default App;
