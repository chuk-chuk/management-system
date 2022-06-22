import React, {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import { UserContext, UserContextType } from "../../context/UserContext";
import { User } from "../../pages/users/Users.types";
import { Button } from "../button/Button";

type UserFormProps = {
  onClose: () => void;
};

const initialUserState = {
  id: "",
  firstName: "",
  lastName: "",
  bio: "",
  groups: [],
};

export function UserForm({ onClose }: UserFormProps) {
  const { addUser } = useContext(UserContext) as UserContextType;
  const [userState, setUserState] = useState<User>(initialUserState);

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    setUserState({
      ...userState,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    addUser(userState);
    setUserState(initialUserState);
    onClose();
  };

  return (
    <form className="flex flex-col align-left" onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={userState.firstName}
        onChange={handleOnChange}
        placeholder="First name"
        className="border mb-4 p-2 rounded-md"
      />
      <input
        type="text"
        name="lastName"
        value={userState.lastName}
        onChange={handleOnChange}
        placeholder="Last name"
        className="border mb-4 p-2 rounded-md"
      />
      <textarea
        name="bio"
        value={userState.bio}
        onChange={handleOnChange}
        placeholder="Short bio ..."
        className="border mb-4 p-2 rounded-md"
      />
      <Button title="Save" />
    </form>
  );
}
