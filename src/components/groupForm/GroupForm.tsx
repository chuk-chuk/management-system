import React, {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import { GroupContext, GroupContextType } from "../../context/GroupContext";
import { Button } from "../button/Button";

type GroupFormProps = {
  onClose: () => void;
};

const initialGroupState = {
  id: "",
  name: "",
  description: "",
  users: [],
};

export function GroupForm({ onClose }: GroupFormProps) {
  const { addGroup } = useContext(GroupContext) as GroupContextType;
  const [groupState, setGroupState] = useState(initialGroupState);

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    setGroupState({
      ...groupState,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    addGroup(groupState);
    setGroupState(initialGroupState);
    onClose();
  };

  return (
    <form className="flex flex-col align-left" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={groupState.name}
        onChange={handleOnChange}
        placeholder="Name"
        className="border mb-4 p-2 rounded-md"
      />
      <textarea
        name="description"
        value={groupState.description}
        onChange={handleOnChange}
        placeholder="Short description ..."
        className="border mb-4 p-2 rounded-md"
      />
      <Button
        title="Save"
        className="bg-blue-50 border-blue-100 text-blue-500"
      />
    </form>
  );
}
