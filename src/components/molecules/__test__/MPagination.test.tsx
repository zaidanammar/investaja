import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import MPagination from "../MPagination";

const mockedChange = jest.fn();

const data = [
  {
    order_id: "4307c153-ea76-44b6-87c4-082ab5058580",
    start_date: "2020-01-03 02:15:24",
    due_date: "2020-02-03 02:15:24",
    full_name: "Bonnie Moore",
    location: "Kiehnville, Cuba",
    status: "completed",
    conversion_item: "Bonds",
    conversion_revenue: "244",
  },
  {
    order_id: "87185a7f-f5f6-4716-ac07-8b7955eef1d3",
    start_date: "2020-01-03 11:17:22",
    due_date: "2020-02-03 11:17:22",
    full_name: "Eloise Hintz",
    location: "Katrineshire, Belgium",
    status: "canceled",
    conversion_item: "Mutualfund",
    conversion_revenue: "837",
  },
];

describe("Pagination", () => {
  it("should render pagination element", () => {
    render(
      <MPagination
        data={data}
        rowsPerPage={5}
        page={1}
        setRowsPerPage={mockedChange}
        setPage={mockedChange}
      />
    );
    const paginationElement = screen.getByTestId("paginate");
    expect(paginationElement).toBeInTheDocument();
  });

  it("should be able change pagination limit", () => {
    render(
      <MPagination
        data={data}
        rowsPerPage={10}
        page={1}
        setRowsPerPage={mockedChange}
        setPage={mockedChange}
      />
    );
    const paginationElement = screen.getByTestId(
      "rows-per-page"
    ) as HTMLSelectElement;
    fireEvent.click(paginationElement);
    fireEvent.change(paginationElement, { target: { value: "10" } });
    expect(paginationElement?.value).toBe("10");
  });
});
