import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import EventList from "../EventList";
import Event from "../Event";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test("test that componet is rendered", () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test("test that event wrapping div is rendered", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("test that event wrapping div just shows event__Overview", () => {
    expect(EventWrapper.find(".event").children()).toHaveLength(1);
  });

  test("test that event__Overview is rendered", () => {
    expect(EventWrapper.find(".event__Overview")).toHaveLength(1);
  });

  test("test that event__Overview children are rendered", () => {
    expect(EventWrapper.find(".event__Overview").children()).toHaveLength(3);
  });

  test("test that event__Details children are rendered", () => {
    EventWrapper.setState({
      showDetails: true
    });
    expect(EventWrapper.find(".event__Details--description")).toHaveLength(1);
  });

  test("test that show/hide details button is rendered", () => {
    expect(EventWrapper.find(".event__Overview button")).toHaveLength(1);
  });

  test("click on button should show details", () => {
    EventWrapper.setState({
      showDetails: false
    });
    EventWrapper.find(".event__Overview button").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(true);
  });

  test("set mock event data as state", () => {
    EventWrapper.setState({
      event: {
        local_time: "18:30",
        local_date: "2020-05-20",
        link:
          "https://www.meetup.com/Guelph-Social-Mix-and-Mingle/events/wzfcnrybchbkc/",
        visibility: "public_limited",
        group: {
          created: 1453467538000,
          name: "Guelph Social Mix & Mingle",
          id: 19411896,
          join_mode: "approval",
          lat: 43.540000915527344,
          lon: -80.2699966430664,
          urlname: "Guelph-Social-Mix-and-Mingle",
          who: "Mix and Mingle",
          localized_location: "Guelph, ON",
          state: "ON",
          country: "ca",
          region: "en_US",
          timezone: "Canada/Eastern"
        },
        waitlist_count: 0,
        yes_rsvp_count: 0,
        duration: 9000000,
        time: 1590013800000,
        utc_offset: -14400000,
        name: "3rd Wednesday--FUN with CARDS NIGHT in GUELPH",
        id: "wzfcnrybchbkc"
      }
    });
    console.log(EventWrapper.state("event"));
    expect(EventWrapper.state("event").name).toBe("Guelph Social Mix & Mingle");
  });
});
