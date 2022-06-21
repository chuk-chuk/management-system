import React from "react";
import { useNavigate } from "react-router-dom";
import { groups } from "../../data";

export function Groups() {
  const navigate = useNavigate();

  return (
    <main className="m-12">
      <h2 className="mb-8">Our Groups</h2>
      <div className="mb-8">
        {groups.map((group) => (
          <div
            key={group.id}
            onClick={() => console.log(group)}
            className="bg-gray-300"
          >
            {group.name}
          </div>
        ))}
      </div>
      <button className="border" onClick={() => navigate("/")}>
        Back
      </button>
    </main>
  );
}
