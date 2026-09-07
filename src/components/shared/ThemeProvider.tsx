"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextThemesTheme,
} from "next-themes";

/**
 * Standard shadcn/ui theme provider backed by next-themes.
 * Toggles the `dark` class on <html> — your CSS variables react to it,
 * so the design is unchanged. Keeps a `toggleTheme` helper for consumers.
 */
export function useTheme() {
  const { theme, setTheme } = useNextThemesTheme();
  const resolved = theme ?? "dark";
  const toggleTheme = React.useCallback(() => {
    setTheme(resolved === "dark" ? "light" : "dark");
  }, [resolved, setTheme]);
  return { theme: resolved, toggleTheme };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
