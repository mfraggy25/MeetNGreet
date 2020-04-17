import React from "react";
import { mount } from "enzyme";

import App from "../App";

import Event from "../Event";
import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppWrapper;
    given("there are a list of events to view", () => {});
    when("there are no details shown", () => {
      AppWrapper = mount(<App />);
    });

    then(
      "Only the names of the events are shown while the elements are collapsed",
      () => {
        expect(AppWrapper.find(".eventDetails")).toHaveLength(0);
      }
    );
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;

    given("the user wants to learn more about a particular event", () => {
      AppWrapper = mount(<App />);
    });

    when("the user clicks on an event", () => {
      AppWrapper.update();
      AppWrapper.find(".eventButton").at(0).simulate("click");
    });

    then("the user can view the details", () => {
      expect(AppWrapper.find(".eventDetails")).toHaveLength(1);
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the user opens the app", () => {
      AppWrapper = mount(<App />);
    });

    and("the user has finished reading the details of an event", () => {
      AppWrapper.update();
      AppWrapper.find(".eventButton").at(0).simulate("click");
      expect(AppWrapper.find(".eventDetails")).toHaveLength(1);
    });

    when("the user clicks on the event again", () => {
      AppWrapper.find(".eventButton").at(0).simulate("click");
    });

    then("the event elements are collapsed", () => {
      expect(AppWrapper.find(".eventDetails")).toHaveLength(0);
    });
  });
});
