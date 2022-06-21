import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Button } from "../../components/button/Button";
import { Modal } from "../../components/modal/Modal";
import { UserForm } from "../../components/userForm/UserForm";
import { users } from "../../data";
import { User } from "./Users.types";

export function Users() {
  const navigate = useNavigate();
  const [usersList, setUsersList] = useState(users);
  const [showAddModal, setShowAddModal] = useState(false);

  const addUser = (userInput: User) => {
    let copy = [...usersList];
    copy = [
      ...copy,
      {
        id: uuid(),
        firstName: userInput.firstName,
        lastName: userInput.lastName,
        bio: userInput.bio,
        groups: [],
      },
    ];
    setUsersList(copy);
  };

  return (
    <main data-testid="users-page" className="m-12">
      <h2 className="mb-8">Our Users</h2>
      <div className="mb-8">
        {usersList.map((user) => (
          <div
            key={user.id}
            onClick={() => console.log(user)}
            className="bg-gray-300"
          >
            {user.firstName} {user.lastName}
          </div>
        ))}
      </div>
      {showAddModal && (
        <Modal onClose={() => setShowAddModal(false)}>
          <UserForm addUser={addUser} onClose={() => setShowAddModal(false)} />
        </Modal>
      )}
      <Button title="Add User" onClick={() => setShowAddModal(true)} />
      <Button title="Back" onClick={() => navigate("/")} />
    </main>
  );
}
