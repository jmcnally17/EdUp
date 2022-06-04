import React from "react";
import EventModal from "./eventModal";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

xtest("Event Modal", () => {
  render(<EventModal />);
});
