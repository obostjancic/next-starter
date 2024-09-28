"use client";

import { useTheme } from "next-themes";
import { useMemo } from "react";

export default function useSystemTheme() {
  const { theme, setTheme, systemTheme } = useTheme();

  return useMemo(() => {
    return {
      theme: theme === "system" ? systemTheme : theme,
      setTheme,
      systemTheme,
    };
  }, [theme, setTheme, systemTheme]);
}
