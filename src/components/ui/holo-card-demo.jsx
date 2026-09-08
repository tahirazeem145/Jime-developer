"use client";

import React from "react";
import { HoloCard } from "./holo-card";

export default function HoloCardDemo() {
  return (
    <div className="flex w-full items-center justify-center p-10">
      <div data-theme="dark" className="w-[360px] max-w-full">
        <HoloCard maxTilt={16} aspect={1.586}>
          <div className="flex items-start justify-between">
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#9EA8A3]">
              Jime Developers
            </span>
            <span className="rounded-full border border-[#1E3A26] px-2 py-0.5 text-[10px] font-medium text-[#66FF88]">
              Holo Foil
            </span>
          </div>

          <div>
            <p className="text-2xl font-semibold tracking-tight text-white font-sora">
              Interactive Card
            </p>
            <p className="mt-1 text-sm text-[#9EA8A3] font-inter">
              Move your pointer across the card to tilt in 3D space.
            </p>
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#9EA8A3] font-mono">
            <span className="tracking-widest">0001 / 2026</span>
            <span>jimedevelopers.in</span>
          </div>
        </HoloCard>
      </div>
    </div>
  );
}
