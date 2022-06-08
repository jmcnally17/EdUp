import React from "react";
import Success from "./success";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("success", () => {
  it("renders a message for a successful payment", () => {
    render(<Success />);

    expect(screen.getByText("Thank you for your payment!")).toBeInTheDocument();
    const whatsapp = "You should receive a WhatsApp confirmation shortly";
    expect(screen.getByText(whatsapp)).toBeInTheDocument();
  });
});
