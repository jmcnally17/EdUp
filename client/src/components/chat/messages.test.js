import React from "react";
import Messages from "./messages";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

xtest("Messages", () => {
  render(<Messages />);
});
