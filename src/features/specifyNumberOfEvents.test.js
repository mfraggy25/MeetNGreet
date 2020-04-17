import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount, shallow } from "enzyme";
import { mockEvents } from "../mock-events";
import App from "../App";

import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 30 is the default number", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the user hasn’t specified a number of events", () => {});

    when("they are viewing the events", () => {
      AppWrapper = mount(<NumberOfEvents />);
    });

    then("the number of events will default to 30", () => {
      expect(AppWrapper.state("query")).toEqual(30);
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the user wants to change number of events they can see", () => {
      AppWrapper = mount(<App />);
    });

    when("they are currently at the default list", () => {
      AppWrapper.find(".eventsNumberInput").simulate("change", {
        target: { value: 30 },
      });
    });

    then(
      "the specific number of events will change by the user’s request",
      () => {
        const EventWrapper = AppWrapper.find(NumberOfEvents);
        expect(EventWrapper.state("query")).toEqual(32);
      }
    );
  });
});
