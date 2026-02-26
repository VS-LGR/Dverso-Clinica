"use client";

import { useId } from "react";

interface DogStickerProps {
  size?: number;
  variant?: "tilt-left" | "tilt-right" | "tilt-subtle";
  className?: string;
  "aria-hidden"?: boolean;
}

/**
 * Cartoon dog sticker — minimal, friendly. Use sparingly for warmth without clutter.
 */
export function DogSticker({
  size = 80,
  variant = "tilt-subtle",
  className = "",
  "aria-hidden": ariaHidden = true,
}: DogStickerProps) {
  const id = useId();
  const gradientId = `dogShade-${id.replace(/:/g, "")}`;
  const rotation =
    variant === "tilt-left"
      ? "-rotate-6"
      : variant === "tilt-right"
        ? "rotate-6"
        : "rotate-[-3deg]";

  return (
    <span
      className={`inline-block relative ${rotation} transition-transform hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden={ariaHidden}
    >
      {/* Tape strip at top */}
      <span
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-4 rounded-sm bg-white/70 border border-primary-light/40 -rotate-6 z-10"
        aria-hidden
      />
      {/* Sticker effect: paper-like shadow + rounded */}
      <span className="block w-full h-full rounded-2xl bg-white/95 shadow-sticker border border-primary-light/30 p-1.5">
        <span className="block w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-primary-light/30 to-accent-light/40">
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full p-1.5 text-primary"
            aria-hidden
          >
            {/* Cartoon dog face: rounded head, floppy ears, eyes, nose */}
            <ellipse cx="32" cy="36" rx="20" ry="22" fill="currentColor" opacity="0.9" />
            <ellipse cx="32" cy="36" rx="20" ry="22" fill={`url(#${gradientId})`} />
            {/* Ears */}
            <ellipse cx="14" cy="28" rx="8" ry="14" fill="currentColor" opacity="0.85" transform="rotate(-25 14 28)" />
            <ellipse cx="50" cy="28" rx="8" ry="14" fill="currentColor" opacity="0.85" transform="rotate(25 50 28)" />
            {/* Inner ears */}
            <ellipse cx="14" cy="28" rx="4" ry="8" fill="currentColor" opacity="0.4" transform="rotate(-25 14 28)" />
            <ellipse cx="50" cy="28" rx="4" ry="8" fill="currentColor" opacity="0.4" transform="rotate(25 50 28)" />
            {/* Eyes */}
            <ellipse cx="26" cy="32" rx="4" ry="5" fill="#2d2a2d" />
            <ellipse cx="38" cy="32" rx="4" ry="5" fill="#2d2a2d" />
            <ellipse cx="27" cy="30.5" rx="1.2" ry="1.5" fill="white" />
            <ellipse cx="39" cy="30.5" rx="1.2" ry="1.5" fill="white" />
            {/* Nose */}
            <ellipse cx="32" cy="42" rx="5" ry="4" fill="#2d2a2d" />
            <ellipse cx="32" cy="40" rx="1.5" ry="1" fill="white" opacity="0.6" />
            <defs>
              <linearGradient id={gradientId} x1="32" y1="14" x2="32" y2="58" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.25" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </span>
    </span>
  );
}
