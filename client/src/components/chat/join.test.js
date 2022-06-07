import React from "react";
import Join from "./join";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

xtest("Join", () => {
  render(<Join />);
});
