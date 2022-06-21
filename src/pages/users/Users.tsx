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
    <main data-testid="users-page" className="m-24">
      <Button title="Back" onClick={() => navigate("/")} className="mb-8" />
      <div className="flex flex-wrap mb-8 border rounded-md">
        {usersList.length > 0 ? (
          usersList.map((user) => (
            <div
              key={user.id}
              onClick={() => console.log(user)}
              className="flex flex-col items-center justify-center w-48 h-48 m-4 rounded-full border bg-blue-400 text-white"
            >
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
            </div>
          ))
        ) : (
          <p>No users found, do you wanna be the first one?</p>
        )}
      </div>

      {showAddModal && (
        <Modal onClose={() => setShowAddModal(false)}>
          <UserForm addUser={addUser} onClose={() => setShowAddModal(false)} />
        </Modal>
      )}
      <Button title="Add User" onClick={() => setShowAddModal(true)} />
    </main>
  );
}
