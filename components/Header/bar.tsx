"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
  MenubarShortcut,
} from "@/components/ui/menubar";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image"; 
import Link from "next/link";

export function MenubarDemo() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const { setTheme } = useTheme();
  const t = useTranslations("header");

  const onSelectChange = (locale: React.ChangeEvent<HTMLDivElement>) => {
    startTransition(() => {
      router.replace(`/${locale}`);
    });
  };

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </MenubarTrigger>

        <MenubarContent align="center">
          <MenubarItem onClick={() => setTheme("light")}>
            {t("mode.light")}
          </MenubarItem>
          <MenubarItem onClick={() => setTheme("dark")}>
            {t("mode.dark")}
          </MenubarItem>
          <MenubarItem onClick={() => setTheme("system")}>System</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">
          {localActive}
        </MenubarTrigger>
        <MenubarContent align="end">
          <MenubarRadioGroup
            value={localActive}
            onChange={onSelectChange}
            disabled={isPending}
          >
            <MenubarRadioItem
              value="tr"
              className="cursor-pointer"
              onClick={() => onSelectChange("tr")}
            >
              türkçe <MenubarShortcut>🇹🇷</MenubarShortcut>
            </MenubarRadioItem>
            <MenubarRadioItem value="en" onClick={() => onSelectChange("en")}>
              english <MenubarShortcut>🇬🇧</MenubarShortcut>
            </MenubarRadioItem>
            <MenubarRadioItem value="kz" onClick={() => onSelectChange("kz")}>
              қазақ <MenubarShortcut>🇰🇿</MenubarShortcut>
            </MenubarRadioItem>
            <MenubarRadioItem value="mn" onClick={() => onSelectChange("mn")}>
              монгол <MenubarShortcut>🇲🇳</MenubarShortcut>
            </MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">
          {t("contact")}
        </MenubarTrigger>
        <MenubarContent align="end">
          <MenubarItem className="cursor-pointer">
            <Link href="https://github.com/huzarh">
              <Image
                alt="GitHub"
                src="/assets/icons/Github-Dark.svg"
                width={32}
                height={32}
                className="inline-block h-8 w-8 p-2"
              />
              Github
            </Link>
          </MenubarItem>
          <MenubarItem className="cursor-pointer">
            <Link href="https://www.instagram.com/zir_huz/">
              <Image
                alt="Instagram"
                src="/assets/icons/Instagram.svg"
                width={32}
                height={32}
                className="inline-block h-8 w-8 p-2"
              />
              Instagram
            </Link>
          </MenubarItem>
          <MenubarItem className="cursor-pointer">
            <Link href="https://www.linkedin.com/in/uzeyiraskyer">
              <Image
                alt="LinkedIn"
                src="/assets/icons/Linkedin.svg"
                width={32}
                height={32}
                className="inline-block h-8 w-8 p-2"
              />
              LinkedIn
            </Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
