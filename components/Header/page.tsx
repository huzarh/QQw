import React from "react";
import { ModeToggle } from "../mode-toggle";
import { LangToggle } from "../lang-toggle";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { MenubarDemo } from "./bar";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="  border-b   text-3xl font-semibold tracking-tight  ">
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
