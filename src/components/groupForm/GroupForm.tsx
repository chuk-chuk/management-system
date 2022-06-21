import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { Group } from "../../pages/groups/Groups.types";
import { Button } from "../button/Button";

type GroupFormProps = {
  addGroup: (user: Group) => void;
  onClose: () => void;
};

const initialGroupState = {
  id: "",
  name: "",
  description: "",
  users: [],
};

export function GroupForm({ addGroup, onClose }: GroupFormProps) {
  const [groupState, setgroupState] = useState(initialGroupState);

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    setgroupState({
      ...groupState,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    addGroup(groupState);
    setgroupState(initialGroupState);
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
      <Button title="Save" />
    </form>
  );
}
