import React from "react";
import { shallow } from "enzyme";
import ContactsList from "../components/ContactsList.js";

describe("<ContactsList />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ContactsList />);
  });
  it("renders a list of contacts", () => {
    expect(wrapper.find("li").length).toEqual(5);
  });
});
