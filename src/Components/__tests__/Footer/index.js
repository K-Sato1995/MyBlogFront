import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "../../Footer";

configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<Footer {...props} />);
  return component;
};

describe("Footer component", () => {
  it("should render without errors", () => {
    const wrapper = setUp().find(".footer");
    expect(wrapper.length).toBe(1);
  });
});
