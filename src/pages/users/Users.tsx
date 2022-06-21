import React from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../../data";

export function Users() {
  const navigate = useNavigate();

  return (
    <main className="m-12">
      <h2 className="mb-8">Our Users</h2>
      <div className="mb-8">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => console.log(user)}
            className="bg-gray-300"
          >
            {user.first_name}
          </div>
        ))}
      </div>
      <button className="border" onClick={() => navigate("/")}>
        Back
      </button>
    </main>
  );
}
