import React, { useContext } from "react";
import { GroupContext, GroupContextType } from "../../context/GroupContext";
import { User } from "../../pages/users/Users.types";

type SelectUserProps = {
  onClose: () => void;
  groupId: string;
  users: User[];
};

export function SelectUser({ onClose, groupId, users }: SelectUserProps) {
  const { groupsList, setGroupsList } = useContext(
    GroupContext
  ) as GroupContextType;

  const handleSelectUser = (userId: string) => {
    const newGroupList = groupsList.map((obj) => {
      if (obj.id === groupId) {
        const newUsersList: string[] = obj.users.concat(userId);
        return { ...obj, users: newUsersList };
      }

      return obj;
    });

    setGroupsList(newGroupList);
  };

  return (
    <div className="m-1">
      {users.map((u, i) => (
        <div
          key={i}
          onClick={() => handleSelectUser(u.id)}
          className="bg-gray-100 px-1 mb-2 w-36"
        >
          {u.firstName} {u.lastName}
        </div>
      ))}
      {!users.length && <p>All users are in the group!</p>}
    </div>
  );
}
