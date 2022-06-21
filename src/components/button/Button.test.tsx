import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

const props = {
  title: "Title",
  onClick: jest.fn(),
};

describe("Button", () => {
  it("renders the title", () => {
    render(<Button {...props} />);
    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("calls onClick once", () => {
    render(<Button {...props} />);
    userEvent.click(screen.getByText(/Title/i));
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
