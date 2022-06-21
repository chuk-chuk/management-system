import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="m-20 text-center w-full md:w-3/4 lg:w-1/2">
      <h1 className="text-2xl text-blue-600">User Management System</h1>
      <nav className="py-2 border-solid border-y-4">
        <Link to="/users">Users</Link> | <Link to="/groups">Groups</Link>
      </nav>
    </div>
  );
}

export default App;
