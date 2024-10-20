import React from "react";
import { MenubarDemo } from "./bar";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="cursor-pointer border-b   text-3xl font-semibold tracking-tight  ">
        Uz
      </h2>
      {/* <div className="flex justify-between items-center w-24">
        <LangToggle />
        <ModeToggle />
      </div> */}
      <MenubarDemo />
    </div>
  );
}
