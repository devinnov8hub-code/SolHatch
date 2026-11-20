import { DM_Sans, Lato, League_Spartan, Space_Grotesk } from "next/font/google";

/** Typography roles used throughout the SolHatch site. */
export const heroHeadingFont = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const titleFont = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: "700",
});

export const highlightFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const bodyFont = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const fontVariables = [
  heroHeadingFont.variable,
  titleFont.variable,
  highlightFont.variable,
  bodyFont.variable,
].join(" ");
