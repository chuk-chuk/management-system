import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Card } from "./Card";

describe("Card", () => {
  it("renders the title", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Card link={"/users"} title="My Title" />,
      </Router>
    );

    const link = screen.getByTestId("card-link");
    expect(link).toContainHTML("My Title");
  });
});
