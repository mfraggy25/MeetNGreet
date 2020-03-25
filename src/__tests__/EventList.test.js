import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import EventList from "../EventList";

describe("<App /> component", () => {
  test("render correct number of events", () => {
    const EventListWrapper = shallow(<EventList />);
    EventListWrapper.setState({ events: [{}, {}, {}, {}] });
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });
});
