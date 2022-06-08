import React from "react";
import Registration from "./registration";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Registration", () => {
  it("Registration has input fields for name and password", () => {
    render(<Registration />);
    expect(screen.getByText("Register")).toBeInTheDocument();

    const usernameEl = screen.getByLabelText("username");
    expect(usernameEl.value).toBe("");
    expect(usernameEl.placeholder).toBe("username");

    const passwordEl = screen.getByLabelText("password");
    expect(passwordEl.value).toBe("");
    expect(passwordEl.placeholder).toBe("password");
  });
});
