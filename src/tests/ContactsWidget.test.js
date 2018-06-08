import React from "react";
import { shallow } from "enzyme";
import ContactsWidget from "../components/ContactsWidget.js";
import List from "../components/List.js";
import ToggleableAddForm from "../components/ToggleableAddForm";

describe("<ContactsWidget />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ContactsWidget />);
  });
  it("renders <List />", () => {
    expect(wrapper.find(List).length).toEqual(1);
  });
  it("renders <ToggleableAddForm />", () => {
    expect(wrapper.contains(<ToggleableAddForm />)).toBe(true);
  });
});
