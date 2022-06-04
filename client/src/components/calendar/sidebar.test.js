import React from "react";
import Sidebar from "./sidebar";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

xtest("Sidebar", () => {
  render(<Sidebar />);
});
