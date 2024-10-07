import React from "react";
import { ModeToggle } from "../mode-toggle";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="  border-b   text-3xl font-semibold tracking-tight  ">
        Uz
      </h2>
      <ModeToggle />
    </div>
  );
}
