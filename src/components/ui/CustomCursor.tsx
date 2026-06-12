"use client";

import { useEffect, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, [role='button'], .project-block";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [accentColor, setAccentColor] = useState<"mint" | "coral">("mint");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const interactive = target.closest(INTERACTIVE_SELECTOR);
      setIsHovering(!!interactive);

      if (interactive) {
        const isProject = interactive.classList.contains("project-block");
        setAccentColor(isProject ? "coral" : "mint");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const outerSize = isHovering ? 40 : 24;
  const outerRotation = isHovering ? 45 : 0;
  const borderColor = isHovering
    ? accentColor === "mint"
      ? "#9EFFBF"
      : "#FF8C69"
    : "rgba(26, 60, 43, 0.4)";

  return (
    <>
      {/* Inner dot — tracks immediately */}
      <div
        className="fixed top-0 left-0 z-[9999] pointer-events-none bg-forest"
        style={{
          width: 4,
          height: 4,
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
        }}
      />

      {/* Outer box — lags via CSS transition */}
      <div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: outerSize,
          height: outerSize,
          transform: `translate(${position.x - outerSize / 2}px, ${position.y - outerSize / 2}px) rotate(${outerRotation}deg)`,
          transition:
            "transform 0.08s linear, width 0.08s linear, height 0.08s linear, border-color 0.08s linear, border-style 0.08s linear",
          border: `1px ${isHovering ? "solid" : "dashed"} ${borderColor}`,
        }}
      />
    </>
  );
}
