import React from "react";
import Login from "./login";
import { render, screen, cleanup, userEvent } from "@testing-library/react";

afterEach(cleanup);

test("Login has input fields for name and password", () => {
  render(<Login />);
  const usernameEl = screen.getByLabelText("username");
  expect(usernameEl).toBeInTheDocument();
  
});
