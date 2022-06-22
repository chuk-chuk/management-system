import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Modal } from "../../components/modal/Modal";
import { UserForm } from "../../components/userForm/UserForm";
import { UserContext, UserContextType } from "../../context/UserContext";

export function Users() {
  const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);
  const { usersList } = useContext(UserContext) as UserContextType;

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
          <UserForm onClose={() => setShowAddModal(false)} />
        </Modal>
      )}
      <Button title="Add User" onClick={() => setShowAddModal(true)} />
    </main>
  );
}
