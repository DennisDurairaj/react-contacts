import React from "react";
import { shallow } from "enzyme";
import App from "../components/App.js";
import ContactsList from "../components/ContactsList.js";

describe("<App />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("renders a <ContactsList />", () => {
    expect(wrapper.contains(<ContactsList />)).toBe(true);
  });
});
