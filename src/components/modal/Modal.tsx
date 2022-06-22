import React, { ReactNode } from "react";
import { Button } from "../button/Button";

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};

export function Modal({ onClose, children }: ModalProps) {
  return (
    <div
      className={
        "fixed top-0 right-0 w-full h-full z-50 bg-black bg-opacity-80 flex justify-center items-center"
      }
    >
      <div className={"px-8 pb-8 pt-4 bg-gray-100"}>
        <div className="flex justify-end mb-4">
          <Button title="X" onClick={onClose} className="px-2 py-0" />
        </div>
        {children}
      </div>
    </div>
  );
}
