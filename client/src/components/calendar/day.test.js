import React from "react";
import Day from "./day";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

xtest("Day", () => {
  render(<Day />);
});
