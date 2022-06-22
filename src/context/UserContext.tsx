import React, { createContext, ReactNode, useState } from "react";
import { v4 as uuid } from "uuid";
import { users } from "../data";
import { User } from "../pages/users/Users.types";

export type UserContextType = {
  usersList: User[];
  addUser: (user: User) => void;
};

const UserContext = createContext<UserContextType | null>(null);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [usersList, setUsersList] = useState<User[]>(users);

  const addUser = (user: User) => {
    const newUser: User = {
      id: uuid(),
      firstName: user.firstName,
      lastName: user.lastName,
      bio: user.bio,
      groups: [],
    };
    setUsersList([...usersList, newUser]);
  };

  return (
    <UserContext.Provider value={{ usersList, addUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
