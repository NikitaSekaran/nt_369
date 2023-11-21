import "react-native";
import React from "react";
import App from "../App";

import { fireEvent, render, waitFor } from "@testing-library/react-native";

it("Renders Message", async () => {
  const { getByTestId, getByText, queryByTestId, toJSON } = render(<App />);

  const button = getByText("Say Hello");
  fireEvent.press(button);

  await waitFor(() => expect(queryByTestId("printed-message")).toBeTruthy());

  const printedMessage = getByTestId("printed-message");

  console.log("Rendered Message:", printedMessage.props.children); // Add this line for debugging

  expect(printedMessage.props.children).toBe("Hello Tester");
  expect(toJSON()).toMatchSnapshot();
});