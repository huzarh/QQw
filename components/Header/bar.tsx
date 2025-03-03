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
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export function MenubarDemo() {
  const router = useRouter();
  const localActive = useLocale();
  const { setTheme } = useTheme();
  const t = useTranslations("header");

  const onSelectChange = (locale: string) => {
    router.replace(`/${locale}`);
  };

  return (
    <Menubar >
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">
          <Sun className="h-[1.2rem] w-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
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
          <MenubarRadioGroup value={localActive} onValueChange={onSelectChange}>
            <MenubarRadioItem value="tr" className="cursor-pointer">
              Türkçe <MenubarShortcut>🇹🇷</MenubarShortcut>
            </MenubarRadioItem>
            <MenubarRadioItem value="en" className="cursor-pointer">
              English <MenubarShortcut>en</MenubarShortcut>
            </MenubarRadioItem>
            {/* <MenubarRadioItem value="kz" className="cursor-pointer">
              Қазақ <MenubarShortcut>🇰🇿</MenubarShortcut>
            </MenubarRadioItem> */}
            <MenubarRadioItem value="mn" className="cursor-pointer">
              Монгол <MenubarShortcut>🇲🇳</MenubarShortcut>
            </MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">
          Blog
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">
          Info
        </MenubarTrigger>
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
