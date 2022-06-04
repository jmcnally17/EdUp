import React from "react";
import Registration from "./registration";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

test("Registration has input fields for name and password", async () => {
  render(<Registration />);
  expect(screen.getByText("Register")).toBeInTheDocument();

  const usernameEl = screen.getByLabelText("username");
  expect(usernameEl.value).toBe("");
  expect(usernameEl.placeholder).toBe("username");
  await userEvent.type(usernameEl, "testing");
  expect(usernameEl.value).toBe("testing");

  const passwordEl = screen.getByLabelText("password");
  expect(passwordEl.value).toBe("");
  expect(passwordEl.placeholder).toBe("password");
  await userEvent.type(passwordEl, "password");
  expect(passwordEl.value).toBe("password");
});
