"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { MeshGradient } from "@paper-design/shaders-react";
import heroImg from "../assets/hardware_image.png";
import { useTheme } from "../utils/themeContext";
import HoverZoom from "./HoverZoom";

const HeroText = {
  Title: "Smarter Egg Incubation, Powered by the Sun.",
  Body: "Meet SolHatch, a solar-powered digital egg incubator designed for off-grid operation. It combines solar energy, battery backup, automated egg turning, and intelligent temperature and humidity regulation to maintain stable incubation conditions.",
 
};

function blendHex(color: string, base: string, amount: number) {
  const toChannels = (hex: string) => {
    const value = hex.slice(1);
    const fullValue =
      value.length === 3
        ? value
            .split("")
            .map((channel) => channel + channel)
            .join("")
        : value;

    if (!/^[\da-f]{6}$/i.test(fullValue)) {
      throw new Error(`Expected a 3- or 6-digit hex color, received "${hex}"`);
    }

    return [
      Number.parseInt(fullValue.slice(0, 2), 16),
      Number.parseInt(fullValue.slice(2, 4), 16),
      Number.parseInt(fullValue.slice(4, 6), 16),
    ];
  };

  const colorChannels = toChannels(color);
  const baseChannels = toChannels(base);

  return `#${colorChannels
    .map((channel, index) =>
      Math.round(channel * amount + baseChannels[index] * (1 - amount))
        .toString(16)
        .padStart(2, "0")
    )
    .join("")}`;
}

export default function Hero() {
  const { colors } = useTheme();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);
  const gradientColors = useMemo(
    () => [
      "#FFFFFF",
      colors.cream,
      "#FFFFFF",
      blendHex(colors.primary, colors.cream, 0.2),
      blendHex(colors.secondary, colors.cream, 0.12),
    ],
    [colors.cream, colors.primary, colors.secondary]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return (
    // Fills the screen below the 4rem navbar (svh = stable on mobile browsers)
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] w-full items-center overflow-hidden bg-brand-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-70"
        style={{
          maskImage:
            "linear-gradient(to bottom, #000 65%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 65%, transparent 100%)",
        }}
      >
        <MeshGradient
          colors={gradientColors}
          speed={prefersReducedMotion ? 0 : 0.12}
          maxPixelCount={1_000_000}
          style={{ width: "100%", height: "100%", backgroundColor: "#FFFFFF" }}
        />
      </div>
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-12 lg:px-8 lg:py-20">
        {/* Text */}
        <div className="text-center md:text-left">
          <h1 className="font-heading text-4xl font-bold leading-tight text-brand-secondary sm:text-5xl lg:text-6xl xl:text-7xl">
            {HeroText.Title}
          </h1>

          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            {HeroText.Body}
          </p>

         
        </div>

        {/* Image (right on desktop, below text on mobile) */}
        
<div className="relative -mx-4 my-10 flex h-[500px] w-[calc(100%+2rem)] origin-center scale-125 items-center justify-center sm:mx-0 sm:my-0 sm:h-[650px] sm:w-full sm:scale-100 md:h-[750px] md:scale-110 lg:h-[min(850px,90svh)] lg:scale-125">
  <HoverZoom className="relative h-full w-full">
    <Image
      src={heroImg}
      alt="SolHatch solar-powered digital egg incubator"
      fill
      priority
      sizes="(min-width: 1024px) 65vw, (min-width: 768px) 60vw, 100vw"
      className="object-contain"
    />
  </HoverZoom>
</div>

      </div>
    </section>
  );
}
