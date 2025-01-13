// components/HeaderWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header/page";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const isSakuraPage = pathname.includes("/khuzair");

  // Eğer pathname "/sakura" içeriyorsa Header'ı render etme
  return !isSakuraPage ? <Header /> : null;
}