import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { users } from "../../data";

export function Users() {
  const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <main data-testid="users-page" className="m-12">
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
      {showAddModal && (
        <div
          className={
            "fixed top-0 right-0 w-full h-full z-50 bg-black bg-opacity-80 flex justify-center items-center"
          }
        >
          <div className={"px-8 pb-8 pt-4 bg-white"}>
            <div className="flex justify-end">
              <Button title="X" onClick={() => setShowAddModal(false)} />
            </div>
            Hello
          </div>
        </div>
      )}
      <Button title="Add User" onClick={() => setShowAddModal(true)} />
      <Button title="Back" onClick={() => navigate("/")} />
    </main>
  );
}
