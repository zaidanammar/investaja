import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MSearchBar from "../MSearchBar";

const mockedChange = jest.fn();

describe("Search Bar", () => {
  it("should render search bar element", () => {
    render(<MSearchBar placeholder="Search here..." onChange={mockedChange} />);
    const searchBarElement = screen.getByPlaceholderText(/Search here.../i);
    expect(searchBarElement).toBeInTheDocument();
  });

  it("should be able to type into input", () => {
    render(<MSearchBar placeholder="Search here..." onChange={mockedChange} />);
    const searchBarElement = screen.getByPlaceholderText(
      /Search here.../i
    ) as HTMLInputElement;
    userEvent.type(searchBarElement, "Go Grocery Shopping");
    expect(searchBarElement.value).toBe("Go Grocery Shopping");
  });
});
