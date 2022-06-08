import React from "react";
import Qrcode from "./qrcode";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Qrcode", () => {
  it("renders a field to enter an event for a qrcode", () => {
    const fakeUser = {
      admin: true,
    };
    render(<Qrcode user={fakeUser} />);
    expect(screen.getByText("QR Generator")).toBeInTheDocument();
    const input = screen.getByLabelText("name");
    expect(input.value).toBe("");
    expect(input.placeholder).toBe("Event");
  });
});
