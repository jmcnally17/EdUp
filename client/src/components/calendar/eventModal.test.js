import React from "react";
import EventModal from "./eventModal";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

describe("EventModal", () => {
  it("creating a calendar event", async () => {
    render(<EventModal />)

    const button = screen.getByRole('button', {name: "close"})
    expect(button).toBeInTheDocument();

    const titleEl = screen.getByLabelText("title");
    expect(titleEl.value).toBe("");
    expect(titleEl.placeholder).toBe("Add Title");
    await userEvent.type(titleEl, "testing");
    expect(titleEl.value).toBe("testing");
  
    const descriptionEl = screen.getByLabelText("description");
    expect(descriptionEl.value).toBe("");
    expect(descriptionEl.placeholder).toBe("Add a description");
    await userEvent.type(descriptionEl, "testing");
    expect(descriptionEl.value).toBe("testing");

    const labelEl = screen.getByLabelText("label-0");
    expect(labelEl).toBeInTheDocument();

    const submitEl = screen.getByRole("button", {name: "Save"});
    expect(submitEl).toBeInTheDocument();
  });
})