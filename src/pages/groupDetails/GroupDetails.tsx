import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { GroupContext, GroupContextType } from "../../context/GroupContext";

export function GroupDetails() {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [deleteMessage, setDeleteMessage] = useState("");
  const { groupsList, setGroupsList } = useContext(
    GroupContext
  ) as GroupContextType;

  const groupInfo = groupsList.find((group) => group.id === groupId);

  const handleDeleteGroup = (userId: string) => {
    if (groupInfo?.users && !groupInfo.users.length) {
      const list = groupsList.filter((group) => group.id !== userId);
      setGroupsList(list);
      navigate("/groups");
    } else {
      setDeleteMessage("Sorry, this group cannot be deleted");
    }
  };

  return (
    <div className="m-24">
      {groupId && (
        <>
          <Button
            title="Back"
            onClick={() => navigate("/groups")}
            className="mb-8"
          />
          <div className="mb-6">
            <p>{groupInfo?.name}</p>
            <p>Description: {groupInfo?.description}</p>
            {groupInfo?.users && groupInfo?.users?.length > 0 ? (
              <div>
                {groupInfo?.users.map((user) => (
                  <p>{user}</p>
                ))}
              </div>
            ) : (
              <p>No users yet</p>
            )}
          </div>
          <p className="text-red-200 mb-2">{deleteMessage}</p>
          <Button
            title="Delete this group"
            className="bg-red-400 text-white"
            onClick={() => handleDeleteGroup(groupId)}
          />
        </>
      )}
    </div>
  );
}
