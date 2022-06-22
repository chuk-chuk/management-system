import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { GroupDetails } from "./GroupDetails";
import { GroupContext, GroupContextType } from "../../context/GroupContext";
import { UserContext, UserContextType } from "../../context/UserContext";

describe("GroupDetails", () => {
  const history = createMemoryHistory();
  it("renders the details page", () => {
    const groupContextValue = {
      groupsList: [
        { id: "1", name: "group 1", description: "nice", users: [] },
      ],
      addGroup: jest.fn(),
      setGroupsList: jest.fn(),
    } as GroupContextType;

    const userContextValue = {
      usersList: [
        {
          id: "1",
          firstName: "first",
          lastName: "last",
          bio: "good",
          groups: ["1"],
        },
      ],
      addUser: jest.fn(),
      setUsersList: jest.fn(),
    } as UserContextType;

    render(
      <GroupContext.Provider value={groupContextValue}>
        <UserContext.Provider value={userContextValue}>
          <Router location={history.location} navigator={history}>
            <GroupDetails />,
          </Router>
        </UserContext.Provider>
      </GroupContext.Provider>
    );

    expect(screen.getByTestId("group-details")).toBeInTheDocument();
  });
});
