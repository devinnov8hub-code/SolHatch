"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

// Add your other colors here as you go (hex values)
export type BrandColors = {
  primary: string;
  secondary: string;
  cream: string;
 
};

export const defaultBrandColors: BrandColors = {
  primary: "#F9AC01",
  secondary: "#034022",
  cream: "#FFECC3"
};

type ThemeContextValue = {
  colors: BrandColors;
  setColors: (next: Partial<BrandColors>) => void;
  resetColors: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// "#4F46E5" -> "79 70 229" (channel format lets Tailwind opacity like bg-brand-primary/50 work)
function hexToChannels(hex: string): string {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const n = parseInt(full, 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
}

export function ThemeProvider({
  children,
  initialColors,
}: {
  children: ReactNode;
  initialColors?: Partial<BrandColors>;
}) {
  const [colors, setColorsState] = useState<BrandColors>({
    ...defaultBrandColors,
    ...initialColors,
  });

  // Push every color to a CSS variable on <html>: primary -> --brand-primary
  useEffect(() => {
    const root = document.documentElement;
    (Object.keys(colors) as (keyof BrandColors)[]).forEach((key) => {
      root.style.setProperty(`--brand-${key}`, hexToChannels(colors[key]));
    });
  }, [colors]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      colors,
      setColors: (next) => setColorsState((prev) => ({ ...prev, ...next })),
      resetColors: () => setColorsState(defaultBrandColors),
    }),
    [colors]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}