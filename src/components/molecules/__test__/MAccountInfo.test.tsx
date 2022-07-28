import React from "react";
import { render, screen } from "@testing-library/react";
import MAccountInfo from "../MAccountInfo";

describe("Account Info", () => {
  it("should render account name element", () => {
    render(<MAccountInfo />);
    const accountElement = screen.getByText(/Reinhart H./i);
    expect(accountElement).toBeInTheDocument();
  });

  it("should render account address element", () => {
    render(<MAccountInfo />);
    const accountElement = screen.getByText(/Kemang, Jakarta/i);
    expect(accountElement).toBeInTheDocument();
  });

  it("should render account avatar element", () => {
    render(<MAccountInfo />);
    const accountElement = screen.getByText(/RH/i);
    expect(accountElement).toBeInTheDocument();
  });
});
