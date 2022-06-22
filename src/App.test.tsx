import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import App from "./App";

describe("App", () => {
  it("renders home page with the correct heading", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    expect(screen.getByText(/User Management System/i)).toBeInTheDocument();
  });

  it("sets history location to /users", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );

    const usersLink = screen.getByText("EXPLORE USERS");

    expect(usersLink).toBeInTheDocument();
    userEvent.click(usersLink);
    expect(history.location.pathname).toBe("/users");
  });

  it("sets history location to /groups", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );

    const usersLink = screen.getByText("EXPLORE GROUPS");

    expect(usersLink).toBeInTheDocument();
    userEvent.click(usersLink);
    expect(history.location.pathname).toBe("/groups");
  });
});
