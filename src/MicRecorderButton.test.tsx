import React from "react";
import { shallow } from "enzyme";
import MicRecorderButton from './MicRecorderButton';
test("renders the component", () => {
  const component = shallow(<MicRecorderButton />);
  expect(component).toMatchSnapshot();
});
