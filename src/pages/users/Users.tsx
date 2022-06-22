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
    <main data-testid="users-page" className="m-24 p-8 bg-white rounded-lg">
      <Button title="Back" onClick={() => navigate("/")} className="mb-8" />
      <div className="flex flex-wrap mb-8 border rounded-md">
        {usersList.length > 0 ? (
          usersList.map((user) => (
            <div
              key={user.id}
              className="flex flex-col items-center justify-center w-36 h-36 m-4 rounded-3xl border bg-blue-400 text-white"
            >
              <p>{user.firstName}</p>
              <p className="mb-4">{user.lastName}</p>
              <Button
                title="read more ..."
                onClick={() => navigate(`/users/${user.id}`)}
                className="bg-blue-500 px-1 py-0"
              />
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
      <Button
        title="New User"
        onClick={() => setShowAddModal(true)}
        className="hover:bg-blue-100"
      />
    </main>
  );
}
