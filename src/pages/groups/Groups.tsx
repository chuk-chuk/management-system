import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { GroupForm } from "../../components/groupForm/GroupForm";
import { Modal } from "../../components/modal/Modal";
import { GroupContext, GroupContextType } from "../../context/GroupContext";

export function Groups() {
  const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);
  const { groupsList } = useContext(GroupContext) as GroupContextType;

  return (
    <main data-testid="groups-page" className="m-24">
      <Button title="Back" onClick={() => navigate("/")} className="mb-8" />
      <div className="flex flex-wrap mb-8 border rounded-md">
        {groupsList.length > 0 ? (
          groupsList.map((group) => (
            <div
              key={group.id}
              className="flex flex-col items-center justify-center w-48 h-48 m-4 rounded-full border bg-blue-400 text-white"
            >
              <p className="mb-4">{group.name}</p>
              <Button
                title="more ..."
                onClick={() => navigate(`/groups/${group.id}`)}
                className="bg-blue-800 px-1 py-0"
              />
            </div>
          ))
        ) : (
          <p>No groups found, do you wanna create the first one?</p>
        )}
      </div>

      {showAddModal && (
        <Modal onClose={() => setShowAddModal(false)}>
          <GroupForm onClose={() => setShowAddModal(false)} />
        </Modal>
      )}
      <Button title="Create Group" onClick={() => setShowAddModal(true)} />
    </main>
  );
}
