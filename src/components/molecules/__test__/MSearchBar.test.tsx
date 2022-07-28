import React from "react";
import { render, screen } from "@testing-library/react";
import MSearchBar from "../MSearchBar";

const mockedChange = jest.fn();

describe("Search bar", () => {
  it("should render search bar element", () => {
    render(<MSearchBar placeholder="Search here..." onChange={mockedChange} />);
    const searchBar = screen.getByPlaceholderText(/Search here.../i);
    expect(searchBar).toBeInTheDocument();
  });

  // it('should be able to type into input', () => {
  //     render(
  //         <AddInput
  //             todos={[]}
  //             setTodos={mockedSetTodo}
  //         />
  //     );
  //     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  //     fireEvent.click(inputElement)
  //     fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } })
  //     expect(inputElement.value).toBe("Go Grocery Shopping");
  // });

  // it('should be able to type into input', () => {
  //     render(
  //         <AddInput
  //             todos={[]}
  //             setTodos={mockedSetTodo}
  //         />
  //     );
  //     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  //     fireEvent.click(inputElement)
  //     fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
  //     const buttonElement = screen.getByRole("button", { name: /Add/i});
  //     fireEvent.click(buttonElement)
  //     expect(mockedSetTodo).toBeCalled()
  // });

  // it('should have empty input when add button is cliked', () => {
  //     render(
  //         <AddInput
  //             todos={[]}
  //             setTodos={mockedSetTodo}
  //         />
  //     );
  //     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  //     fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
  //     const buttonElement = screen.getByRole("button", { name: /Add/i});
  //     fireEvent.click(buttonElement)
  //     expect(inputElement.value).toBe("")
  // });
});
