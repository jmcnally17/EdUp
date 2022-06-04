import React from "react";
import TextContainer from "./textContainer";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

xtest("Text Container", () => {
  render(<TextContainer />);
});
