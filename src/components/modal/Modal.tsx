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
      <div className={"px-8 pb-8 pt-4 bg-gray-50"}>
        <div className="flex justify-end mb-4">
          <Button
            title="X"
            onClick={onClose}
            className="px-2 py-0 bg-blue-50 border-blue-100 text-blue-500"
          />
        </div>
        {children}
      </div>
    </div>
  );
}
