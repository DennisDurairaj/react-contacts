import React from "react";
import {shallow} from "enzyme";
import EditableListItem from "../components/EditableListItem.js";
import List from "../components/List.js";

describe("<List />", () => {
  let wrapper;
  beforeEach(() => {
    const contact = [
      {
        name: "Dennis",
        age: 25,
        gender: "male"
      }
    ]
    wrapper = shallow(<List contacts={contact}/>);
  });
  it("read props and display list of contacts", () => {
    expect(wrapper.find(EditableListItem).length).toEqual(1);
  });
});
