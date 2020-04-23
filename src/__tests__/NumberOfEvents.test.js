import React, { Component } from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test("render textbox element", () => {
    expect(NumberOfEventsWrapper.find(".numberOfEvents")).toHaveLength(1);
  });

  test("render text input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(
      NumberOfEventsWrapper.find("#numberOfEvents__input").prop("value")
    ).toBe(numberOfEvents);
  });

  test("change state when input changes", () => {
    const eventObject = { target: { value: 32 } };
    NumberOfEventsWrapper.find("#numberOfEvents__input").simulate(
      "change",
      eventObject
    );
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
  });

  test("change state when input changes", () => {
    const eventObject = { target: { value: 24 } };
    NumberOfEventsWrapper.find("#numberOfEvents__input").simulate(
      "change",
      eventObject
    );
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(24);
  });

  test("show number of events input label", () => {
    expect(NumberOfEventsWrapper.find(".numberOfEvents label")).toHaveLength(1);
  });
});
// describe("<NumberOfEvents /> component", () => {
//   let NumberOfEventsWrapper;
//   beforeAll(() => {
//     NumberOfEventsWrapper = shallow(<NumberOfEvents />);
//   });

//   test("render text input correctly", () => {
//     const NumberOfEvents = NumberOfEventsWrapper.state("NumberOfEvents");
//     expect(
//       NumberOfEventsWrapper.find("#NumberOfEvents-input").prop("value")
//     ).toBe(NumberOfEvents);
//   });

//   test("update state when input is changed", () => {
//     const eventObject = { target: { value: 20 } };
//     NumberOfEventsWrapper.find("#NumberOfEvents-input").simulate(
//       "change",
//       eventObject
//     );
//     expect(NumberOfEventsWrapper.state("NumberOfEvents")).toBe(20);
//   });

//   test("render label with numer of events", () => {
//     expect(NumberOfEventsWrapper.find(".NumberOfEvents label")).toHaveLength(1);
//   });
// });
