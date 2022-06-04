import React from "react";
import Message from "./message";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

xtest("Message", () => {
  render(<Message />);
});
