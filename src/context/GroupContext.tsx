import React, { createContext, ReactNode, useCallback, useState } from "react";
import { v4 as uuid } from "uuid";
import { groups } from "../data";
import { Group } from "../pages/groups/Groups.types";

export type GroupContextType = {
  groupsList: Group[];
  addGroup: (group: Group) => void;
  setGroupsList: (groups: Group[]) => void;
};

const GroupContext = createContext<GroupContextType | null>(null);

const GroupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [groupsList, setGroupsList] = useState<Group[]>(groups);

  const addGroup = useCallback(
    (group: Group) => {
      const newGroup: Group = {
        id: uuid(),
        name: group.name,
        description: group.description,
        users: group.users,
      };
      setGroupsList([...groupsList, newGroup]);
    },
    [groupsList]
  );

  return (
    <GroupContext.Provider value={{ groupsList, addGroup, setGroupsList }}>
      {children}
    </GroupContext.Provider>
  );
};

export { GroupContext, GroupProvider };
