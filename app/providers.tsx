"use client";
import { ContextProvider } from "../context/context";
import { ThemeProvider } from "@/components/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ContextProvider> {children}</ContextProvider>
    </ThemeProvider>
  );
}
