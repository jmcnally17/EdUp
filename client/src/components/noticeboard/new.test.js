import React from "react";
import New from "./new";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

test("Login has input fields for name and description", async () => {
  render(<New />);

  const titleEl = screen.getByLabelText("title");
  expect(titleEl.value).toBe("");
  expect(titleEl.placeholder).toBe("Title");
  await userEvent.type(titleEl, "testing title");
  expect(titleEl.value).toBe("testing title");

  const descriptionEl = screen.getByLabelText("description");
  expect(descriptionEl.value).toBe("");
  expect(descriptionEl.placeholder).toBe("Description");
  await userEvent.type(descriptionEl, "testing description");
  expect(descriptionEl.value).toBe("testing description");
});