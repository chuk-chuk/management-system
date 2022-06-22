import React from "react";
import { Link } from "react-router-dom";

export type CardProps = {
  link: string;
  title: string;
};

export function Card({ link, title }: CardProps) {
  return (
    <Link to={link} data-testid="card-link">
      <div className="h-auto w-48 rounded-3xl border border-solid border-blue-500 p-6 flex flex-col hover:bg-blue-100 mr-8">
        <h5 data-testid="card-title" className="text-2xl text-blue-500 p-0">
          {title}
        </h5>
      </div>
    </Link>
  );
}
