import React from "react";

type ButtonProps = {
  title: string;
  className?: string;
  onClick?: () => void;
};

export function Button({ title, onClick, className = "" }: ButtonProps) {
  return (
    <button
      className={`p-2 border rounded-md border-gray-300 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
