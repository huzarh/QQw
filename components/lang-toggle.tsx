"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu, 
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LangToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          TR
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
