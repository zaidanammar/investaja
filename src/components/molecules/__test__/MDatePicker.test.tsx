import React from "react";
import { render, screen } from "@testing-library/react";
import { addYears } from "date-fns";

import MDatePicker from "../MDatePicker";
import { defineds } from "../../../utils/date";

const mockedChange = jest.fn();

const date = [
  {
    startDate: addYears(new Date("01/01/2022"), -2),
    endDate: defineds.endOfMonth,
    key: "selection",
  },
];

describe("Date Picker", () => {
  it("should render date picker element", () => {
    render(<MDatePicker dateProps={date} handleChangeDate={mockedChange} />);
    const datePickerElement = screen.getByTestId("date-picker");
    expect(datePickerElement).toBeInTheDocument();
  });
});
