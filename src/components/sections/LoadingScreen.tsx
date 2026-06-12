"use client";

import { useEffect, useState } from "react";
import FuzzyText from "@/components/ui/FuzzyText";

const bootLabel = "BOOT_SEQUENCE // PRATHVIRAJ_GOD" + "BOLE";

const fuzzyTextProps = {
  fontSize: "clamp(2.75rem, 11vw, 9rem)" as const,
  fontWeight: 900 as const,
  fontFamily: "var(--font-space-grotesk), sans-serif",
  color: "#1A3C2B",
  glitchMode: true as const,
  baseIntensity: 0.2,
  direction: "both" as const,
  enableHover: false as const,
  className: "max-w-full",
};

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [isFading, setIsFading] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsFading(true), 2500);
    const unmountTimer = setTimeout(() => {
      setIsMounted(false);
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [onComplete]);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-paper transition-opacity duration-500 ease-out overflow-hidden ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className="w-full max-w-[100vw] px-4 sm:px-6 flex flex-col items-center justify-center overflow-hidden"
        aria-label="System initializing"
      >
        <div className="flex flex-col items-center leading-none gap-1 sm:gap-2">
          <FuzzyText {...fuzzyTextProps}>INITIALIZING</FuzzyText>
          <FuzzyText {...fuzzyTextProps}>SYSTEM</FuzzyText>
        </div>

        <p
          className="mt-8 font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase text-forest/40"
        >
          {bootLabel}
        </p>
      </div>
    </div>
  );
}
