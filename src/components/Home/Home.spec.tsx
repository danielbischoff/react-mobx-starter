import * as React from "react";
import { fireEvent, render } from "../../testUtils";
import { Home } from "./Home";
import console = require("console");

test("that counter is rendered", () => {
  const wrapper = render(<Home />);

  expect(wrapper.getByTestId("counter-value").textContent).toBe("0");
});

test("that decrement button click decrements value", () => {
  const wrapper = render(<Home />);

  const decrementButton = wrapper.getByText("-");
  fireEvent.click(decrementButton);

  expect(wrapper.getByTestId("counter-value").textContent).toBe("-1");
});

test("that increment button click increments value", () => {
  const wrapper = render(<Home />);

  const incrementButton = wrapper.getByText("+");
  fireEvent.click(incrementButton);

  expect(wrapper.getByTestId("counter-value").textContent).toBe("1");
});
