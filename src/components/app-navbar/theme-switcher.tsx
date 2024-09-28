"use client";

import { Switch } from "@nextui-org/react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";

import useSystemTheme from "@/hooks/use-system-theme";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useSystemTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      isSelected={theme === "light"}
      onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
      size="lg"
      color="success"
      startContent={<IconSun />}
      endContent={<IconMoon />}
    />
  );
}
