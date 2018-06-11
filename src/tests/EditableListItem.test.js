import React from "react";
import {shallow} from "enzyme";
import EditableListItem from "../components/EditableListItem.js";
import ListItem from "../components/ListItem.js";

describe("<EditableListItem />", () => {
  let wrapper;
  beforeEach(() => {
    const contact = {
      name: "Dennis",
      age: 25,
      gender: "male"
    }
    wrapper = shallow(<EditableListItem key={1} contact={contact}/>);
  });
  it("renders <ListItem />", () => {
    expect(wrapper.find(ListItem).length).toEqual(1);
  });
});
