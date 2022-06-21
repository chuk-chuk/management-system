import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Button } from "../../components/button/Button";
import { GroupForm } from "../../components/groupForm/GroupForm";
import { Modal } from "../../components/modal/Modal";
import { groups } from "../../data";
import { Group } from "./Groups.types";

export function Groups() {
  const navigate = useNavigate();
  const [groupsList, setGroupsList] = useState(groups);
  const [showAddModal, setShowAddModal] = useState(false);

  const addGroup = (userInput: Group) => {
    let copy = [...groupsList];
    copy = [
      ...copy,
      {
        id: uuid(),
        name: userInput.name,
        description: userInput.description,
        users: [],
      },
    ];
    setGroupsList(copy);
  };

  return (
    <main data-testid="users-page" className="m-24">
      <Button title="Back" onClick={() => navigate("/")} className="mb-8" />
      <div className="flex flex-wrap mb-8 border rounded-md">
        {groupsList.length > 0 ? (
          groupsList.map((group) => (
            <div
              key={group.id}
              onClick={() => console.log(group)}
              className="flex flex-col items-center justify-center w-48 h-48 m-4 rounded-full border bg-blue-400 text-white"
            >
              <p>{group.name}</p>
            </div>
          ))
        ) : (
          <p>No groups found, do you wanna create the first one?</p>
        )}
      </div>

      {showAddModal && (
        <Modal onClose={() => setShowAddModal(false)}>
          <GroupForm
            addGroup={addGroup}
            onClose={() => setShowAddModal(false)}
          />
        </Modal>
      )}
      <Button title="Create Group" onClick={() => setShowAddModal(true)} />
    </main>
  );
}
