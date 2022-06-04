import React from "react";
import Month from "./month";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

xtest("Month", () => {
  render(<Month />);
});
