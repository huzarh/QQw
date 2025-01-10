import React from "react";
import { MenubarDemo } from "./bar";

export default function Header() {
  return (
    <div className="w-full p-6 md:w-[1024px] flex justify-between items-center fixed z-[1000]">
      <h2 className="w-10 cursor-pointer border-b   text-3xl font-semibold tracking-tight  ">
        Uz
      </h2>
      <MenubarDemo />
    </div>
  );
}
