import React from "react";
import { shallow } from "enzyme";
import App from "../components/App.js";
import ContactsWidget from "../components/ContactsWidget.js";

describe("<App />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("renders a <ContactsWidget />", () => {
    expect(wrapper.contains(<ContactsWidget />)).toBe(true);
  });
});
