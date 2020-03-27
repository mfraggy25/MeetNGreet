import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
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

  test("when no number was input, 30 is the default event number", () => {
    expect(NumberOfEventsWrapper.state("eventNumber")).toBe(30);
  });

  test("change state when number input changes", () => {
    const eventObject = { target: { value: 25 } };
    NumberOfEventsWrapper.find("input").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("eventNumber")).toBe(20);
  });
  test("show number of events input label", () => {
    expect(NumberOfEventsWrapper.find(".numberOfEvents label")).toHaveLength(1);
  });
});
