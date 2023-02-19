import { NextFontWithVariable } from "@next/font";
import { Oswald, VT323 } from "@next/font/google";

export const oswald: NextFontWithVariable = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const vt323: NextFontWithVariable = VT323({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--vt323",
  display: "swap",
});
