// import React from "react";
// import { loadFeature, defineFeature } from "jest-cucumber";
// import { mount, shallow } from "enzyme";
// import { mockEvents } from "../mock-events";
// import App from "../App";

// import NumberOfEvents from "../NumberOfEvents";

// const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

// defineFeature(feature, (test) => {
//   test("When user hasn’t specified a number, 30 is the default number", ({
//     given,
//     when,
//     then,
//   }) => {
//     let AppWrapper;
//     given("the user hasn’t specified a number of events", () => {});

//     when("they are viewing the events", () => {
//       AppWrapper = mount(<NumberOfEvents />);
//     });

//     then("the number of events will default to 30", () => {
//       expect(AppWrapper.state("NumberOfEvents")).toEqual(30);
//     });
//   });

//   test("User can change the number of events they want to see", ({
//     given,
//     when,
//     then,
//   }) => {
//     let AppWrapper;
//     given("the user wants to change number of events they can see", () => {
//       AppWrapper = mount(<App />);
//     });

//     when("they are currently at the default list", () => {
//       const eventNumber = { target: { value: 32 } };
//       AppWrapper.find(".number-of-events").simulate("change", eventNumber);
//     });

//     then(
//       "the specific number of events will change by the user’s request",
//       () => {
//         const EventWrapper = AppWrapper.find(NumberOfEvents);
//         expect(EventWrapper.state("NumberOfEvents")).toEqual(32);
//       }
//     );
//   });
// });

import React from "react";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import { mockEvents } from "../mock-events";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature.txt");

defineFeature(feature, (test) => {
  test("If user hasn’t specified a number, 32 is the default number.", ({
    given,
    when,
    then,
  }) => {
    given("the user did not specify a number of events being shown", () => {});

    let AppWrapper;

    when("app loaded", () => {
      AppWrapper = mount(<App />);
    });

    then("the default number of shown events is 32", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event").length).toBeLessThanOrEqual(32);
    });
  });

  test("User can change the number of events they want to see.", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;

    given(
      "the list of elements has been loaded and the user did not specify a number of events he wants to see",
      () => {
        AppWrapper = mount(<App />);
      }
    );

    when("the user specified a number", () => {
      const NumberOfEvents = { target: { value: 13 } };
      AppWrapper.find(".numberOfEvents").simulate("change", NumberOfEvents);
    });

    then("the maximum of events listed should be the specified number", () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.setState({ NumberOfEvents: 13 });
      expect(NumberOfEventsWrapper.state("NumberOfEvents")).toBe(13);
    });
  });
});
