import React from "react";
import InfoBar from "./infobar";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("Infobar has a heading for the room", () => {
  render(<InfoBar />);
  const roomHeading = screen.getByRole("heading", { level: 3 });
  expect(roomHeading).toBeInTheDocument();
});
