import React from "react";
import { shallow } from "enzyme";
import App from "../components/App.js";
import EditableListItem from "../components/EditableListItem.js";

describe("<List />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("read props and display list of contacts", () => {
    expect(wrapper.contains(<EditableListItem />));
  });
});
