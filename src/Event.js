import React, { Component } from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Line,
  Cell,
} from "recharts";

class Event extends Component {
  state = {
    showDetails: false,
    events: [],
  };

  handleDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  getData = () => {
    const taken = this.props.event.yes_rsvp_count;
    const limit = this.props.event.rsvp_limit;
    const open = limit - this.props.event.yes_rsvp_count;

    return [
      { name: "Spots Taken", value: taken },
      { name: "Spots Open", value: open },
    ];
  };

  render() {
    const { event } = this.props;
    let colors = ["#8884d8", "#82ca9d"];

    return (
      <div className="event">
        <div className="event__Overview">
          <p className="event__Overview--name">{this.props.event.name}</p>
          <p className="event__Overview--localDate">
            {this.props.event.local_date}
          </p>
          <button className="details-btn" onClick={() => this.handleDetails()}>
            Show Details
          </button>
        </div>
        {this.state.showDetails && (
          <div className="eventDetails">
            {event.yes_rsvp_count && event.rsvp_limit ? (
              <ResponsiveContainer height={200}>
                <PieChart width={200} height={200}>
                  <Pie
                    data={this.getData()}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {this.getData().map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))}
                  </Pie>

                  <Tooltip />

                  <Legend verticalAlign="top" height={36}>
                    <Line
                      name="Spots Taken"
                      type="monotone"
                      dataKey="taken"
                      stroke="#8884d8"
                    />
                    <Line
                      name="Spots Open"
                      type="monotone"
                      dataKey="open"
                      stroke="#82ca9d"
                    />
                  </Legend>
                </PieChart>
              </ResponsiveContainer>
            ) : null}

            <div className="eventVenue">
              Venue: {event.venue && event.venue.address_1}
            </div>
            <div className="eventStatus">Status: {event.status}</div>
            <div
              className="eventDescription"
              dangerouslySetInnerHTML={{ __html: event.description }}
            ></div>
            <button className="details-btn" onClick={this.handleDetails}>
              Hide Details
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
