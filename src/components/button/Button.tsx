import React from "react";

type ButtonProps = {
  title: string;
  onClick: () => void;
};

export function Button({ title, onClick }: ButtonProps) {
  return (
    <button className="border" onClick={onClick}>
      {title}
    </button>
  );
}
