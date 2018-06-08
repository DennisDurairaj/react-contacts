import React from "react";
import { shallow } from "enzyme";
import EditableListItem from "../components/EditableListItem.js";
import ListItem from "../components/ListItem.js";

describe("<EditableListItem />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EditableListItem />);
  });
  it("renders <ListItem />", () => {
    expect(wrapper.find(ListItem).length).toEqual(5);
  });
});
