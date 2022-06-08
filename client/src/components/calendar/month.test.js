import React from "react";
import Month from "./month";
import dayjs from "dayjs";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Month", () => {
  it("renders the days of the month", () => {
    const fakeUser = {
      admin: true,
    };

    render(
      <Month
        month={[
          [
            new dayjs("2022-06-01"),
            new dayjs("2022-06-02"),
            new dayjs("2022-06-03"),
          ],
        ]}
        user={fakeUser}
        colour={null}
      />
    );
    expect(screen.getByText("WED")).toBeInTheDocument();
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("THU")).toBeInTheDocument();
    expect(screen.getByText("02")).toBeInTheDocument();
    expect(screen.getByText("FRI")).toBeInTheDocument();
    expect(screen.getByText("03")).toBeInTheDocument();
  });
});
