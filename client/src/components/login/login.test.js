import React from "react";
import Login from "./login";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Login", () => {
  it("has input fields for name and password", () => {
    render(<Login />);
    expect(screen.getByText("Log in to your account")).toBeInTheDocument();

    const usernameEl = screen.getByLabelText("username");
    expect(usernameEl.value).toBe("");
    expect(usernameEl.placeholder).toBe("Enter Username");

    const passwordEl = screen.getByLabelText("password");
    expect(passwordEl.value).toBe("");
    expect(passwordEl.placeholder).toBe("Enter Password");
  });
});
