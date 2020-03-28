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
        created: 1578798710000,
        duration: 10800000,
        id: "267845217",
        name: "Hootenanny Acoustic Jam",
        date_in_series_pattern: false,
        status: "upcoming",
        time: 1586628000000,
        local_date: "2020-04-11",
        local_time: "14:00",
        updated: 1578798710000,
        utc_offset: -14400000,
        waitlist_count: 0,
        yes_rsvp_count: 2,
        venue: {
          id: 26792284,
          name: "Royal City Studios",
          lat: 43.534446716308594,
          lon: -80.31884002685547,
          repinned: true,
          address_1: "930 Woodlawn Rd W Unit 1",
          city: "Guelph",
          country: "ca",
          localized_country_name: "Canada",
          zip: "N1K 1T2",
          state: "ON"
        },
        group: {
          created: 1578004988000,
          name: "Guelph Music Jams Meetup Group",
          id: 33158012,
          join_mode: "open",
          lat: 43.5,
          lon: -80.23999786376953,
          urlname: "Guelph-Music-Jams-Meetup-Group",
          who: "Members",
          localized_location: "Guelph, ON",
          state: "ON",
          country: "ca",
          region: "en_US",
          timezone: "Canada/Eastern"
        },
        link:
          "https://www.meetup.com/Guelph-Music-Jams-Meetup-Group/events/267845217/",
        description:
          "<p>Come join us at our Hootenanny! Jam to some great folk or bluegrass tunes. Bring your voices, banjos, mandolins, fiddles, accordions, guitars, harmonicas, or even spoons! Pay what you can, $10 suggested.</p> ",
        how_to_find_us:
          "Go to the main entrance across the parking lot from Sutcliffe Kitchens.  We'll be there to greet you in the lobby.",
        visibility: "public",
        member_pay_fee: false
      }
    });
    console.log(EventWrapper.state("event"));
    expect(EventWrapper.state("event").name).toBe("Hootenanny Acoustic Jam");
  });
});
