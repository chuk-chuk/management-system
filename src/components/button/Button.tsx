import React from "react";

type ButtonProps = {
  title: string;
  onClick: () => void;
};

export function Button({ title, onClick }: ButtonProps) {
  return (
    <button className="p-2 border" onClick={onClick}>
      {title}
    </button>
  );
}
