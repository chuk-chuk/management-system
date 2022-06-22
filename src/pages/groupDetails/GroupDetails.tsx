import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { Modal } from "../../components/modal/Modal";
import { SelectUser } from "../../components/selectUser/SelectUser";
import { GroupContext, GroupContextType } from "../../context/GroupContext";
import { UserContext, UserContextType } from "../../context/UserContext";

export function GroupDetails() {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [deleteMessage, setDeleteMessage] = useState("");
  const [addUserModal, setAddUserModal] = useState(false);
  const { groupsList, setGroupsList } = useContext(
    GroupContext
  ) as GroupContextType;
  const { usersList } = useContext(UserContext) as UserContextType;

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

  const getUser = (id: string) => {
    return usersList.find((user) => user.id === id);
  };

  const handleRemoveUser = (userIdToRemove: string) => {
    if (groupInfo?.users && groupInfo.users.length > 0) {
      const newGroupUserList = groupInfo?.users.filter(
        (userId) => userId !== userIdToRemove
      );

      const newGroupList = groupsList.map((obj) => {
        if (obj.id === groupId) {
          return { ...obj, users: newGroupUserList };
        }

        return obj;
      });

      setGroupsList(newGroupList);
    }
  };

  const usersCanBeAdded = usersList.filter((el) => {
    return !groupInfo?.users?.includes(el.id);
  });

  return (
    <div className="m-24 p-8 bg-white rounded-lg">
      {groupId && (
        <>
          <Button
            title="Back"
            onClick={() => navigate("/groups")}
            className="mb-8"
          />
          <div className="mb-6">
            <p className="mb-2">{groupInfo?.name}</p>
            <p className="mb-6">Description: {groupInfo?.description}</p>
            {groupInfo?.users && groupInfo?.users?.length > 0 ? (
              <div className="flex flex-wrap mb-8 border rounded-md">
                {groupInfo?.users.map((userId, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center w-28 h-20 m-2 rounded-md border bg-blue-400 text-white"
                  >
                    <div className="mb-2">
                      {getUser(userId)?.firstName} {getUser(userId)?.lastName}
                    </div>
                    <Button
                      title="x"
                      className="py-0 mr-2 bg-white text-red-400 border-red-400 self-end"
                      onClick={() => handleRemoveUser(userId)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p>Group has no users, do you wanna be a first one?</p>
            )}
          </div>
          <p className="text-red-200 mb-2">{deleteMessage}</p>
          {addUserModal && (
            <Modal onClose={() => setAddUserModal(false)}>
              <SelectUser
                onClose={() => setAddUserModal(false)}
                users={usersCanBeAdded}
                groupId={groupId}
              />
            </Modal>
          )}
          <Button
            title="Add group user"
            className="bg-blue-400 text-white mr-4"
            onClick={() => setAddUserModal(true)}
          />
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
