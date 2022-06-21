import React from "react";

type ButtonProps = {
  title: string;
  onClick?: () => void;
};

export function Button({ title, onClick }: ButtonProps) {
  return (
    <button className="p-2 border rounded-md bg-gray-200" onClick={onClick}>
      {title}
    </button>
  );
}
