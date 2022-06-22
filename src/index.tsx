import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import { Groups } from "./pages/groups/Groups";
import { Users } from "./pages/users/Users";
import { UserDetails } from "./pages/userDetails/UserDetails";
import { GroupProvider } from "./context/GroupContext";
import { GroupDetails } from "./pages/groupDetails/GroupDetails";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GroupProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="users" element={<Users />} />
            <Route path="groups" element={<Groups />} />
            <Route path="groups" element={<Groups />} />
            <Route path="users/:userId" element={<UserDetails />} />
            <Route path="groups/:groupId" element={<GroupDetails />} />
            <Route
              path="*"
              element={
                <main className="py-12">
                  <p>Oops, there's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </GroupProvider>
  </React.StrictMode>
);
