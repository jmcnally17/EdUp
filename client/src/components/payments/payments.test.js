import React from "react";
import Payments from "./payments";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

describe("Payments", () => {
  it("renders a Payments Portal for an admin user", async () => {
    const fakeUser = {
      admin: true
    }
    render(<Payments user={fakeUser} />);
    expect(screen.getByText("Payment Portal")).toBeInTheDocument();

    expect(screen.getByText("Add an Invoice")).toBeInTheDocument();
    const title = screen.getByLabelText("title");
    expect(title.value).toBe("");
    expect(title.placeholder).toBe("Invoice Title");
    await userEvent.type(title, "Testing title");
    expect(title.value).toBe("Testing title");
    const amount = screen.getByLabelText("amount");
    expect(amount.value).toBe("");
    expect(amount.placeholder).toBe("Amount");
    await userEvent.type(amount, "2000");
    expect(amount.value).toBe("2000");
    const submit = screen.getByRole("button", { name: "Submit" });
    expect(submit).toBeInTheDocument();
  });

  it("renders a Payments Portal for a parent user", () => {
    const fakeUser = {
      admin: false
    }
    render(<Payments user={fakeUser} />);
    expect(screen.getByText("Payment Portal")).toBeInTheDocument();

    expect(screen.getByText("Total amount owing")).toBeInTheDocument();
    const checkout = screen.getByRole("button", { name: "Checkout" });
    expect(checkout).toBeInTheDocument();
  });
});
