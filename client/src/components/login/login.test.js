import React from "react";
import Login from "./login";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

test("Login has input fields for name and password", async() => {
  render(<Login />);
  expect(screen.getByText("Log in to your account")).toBeInTheDocument();

  const usernameEl = screen.getByLabelText("username");
  expect(usernameEl.value).toBe("");
  expect(usernameEl.placeholder).toBe("Enter Username");
  await userEvent.type(usernameEl, "testing");
  expect(usernameEl.value).toBe("testing");

  const passwordEl = screen.getByLabelText("password");
  expect(passwordEl.value).toBe("");
  expect(passwordEl.placeholder).toBe("Enter Password");
  await userEvent.type(passwordEl, "password");
  expect(passwordEl.value).toBe("password");
});
