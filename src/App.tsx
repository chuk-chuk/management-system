import React from "react";
import { Card } from "./components/card/Card";

function App() {
  return (
    <div className="flex flex-col items-center m-40 text-center w-full md:w-3/4">
      <h1 className="py-12 text-2xl text-blue-500">USER MANAGEMENT SYSTEM</h1>
      <div className="flex">
        <Card link="/users" title="EXPLORE USERS" />
        <Card link="/groups" title="EXPLORE GROUPS" />
      </div>
    </div>
  );
}

export default App;
