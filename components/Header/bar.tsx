"use client";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export function MenubarDemo() {
  const { setTheme } = useTheme();

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </MenubarTrigger>

        <MenubarContent align="center">
          <MenubarItem onClick={() => setTheme("light")}>Light</MenubarItem>
          <MenubarItem onClick={() => setTheme("dark")}>Dark</MenubarItem>
          <MenubarItem onClick={() => setTheme("system")}>System</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>TR</MenubarTrigger>
        <MenubarContent align="end">
          <MenubarRadioGroup value="tr">
            <MenubarRadioItem value="tr">
              TR <MenubarShortcut>🇹🇷</MenubarShortcut>
            </MenubarRadioItem>
            <MenubarRadioItem value="en" disabled>
              EN <MenubarShortcut>🇬🇧</MenubarShortcut>
            </MenubarRadioItem>
            <MenubarRadioItem value="kz" disabled>
              KZ <MenubarShortcut>🇰🇿</MenubarShortcut>
            </MenubarRadioItem>
            <MenubarRadioItem value="mn" disabled>
              MN <MenubarShortcut>🇲🇳</MenubarShortcut>
            </MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Contact</MenubarTrigger>
        <MenubarContent align="end">
          <MenubarItem>github</MenubarItem>
          <MenubarItem>Instagram</MenubarItem>
          <MenubarItem>Linkedin</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
