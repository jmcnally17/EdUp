import React from "react";
import EventModal from "./eventModal";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("EventModal", () => {
  it("renders a form to create an event", () => {
    render(<EventModal />)

    const button = screen.getByRole('button', {name: "close"})
    expect(button).toBeInTheDocument();

    const titleEl = screen.getByLabelText("title");
    expect(titleEl.value).toBe("");
    expect(titleEl.placeholder).toBe("Add Title");
  
    const descriptionEl = screen.getByLabelText("description");
    expect(descriptionEl.value).toBe("");
    expect(descriptionEl.placeholder).toBe("Add a description");

    const labelEl = screen.getByLabelText("label-0");
    expect(labelEl).toBeInTheDocument();

    const submitEl = screen.getByRole("button", {name: "Save"});
    expect(submitEl).toBeInTheDocument();
  });
})