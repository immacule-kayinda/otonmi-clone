"use client";

import { useEffect, useState } from "react";

export default function RiskScore() {
  const [score, setScore] = useState(0);

  // Simulate dynamic scoring effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prev) => {
        const noise = Math.floor(Math.random() * 5) - 2; // -2 to +2
        let newScore = prev + noise;
        if (newScore < 85) newScore = 85;
        if (newScore > 98) newScore = 98;
        return newScore;
      });
    }, 800);
    setScore(88); // Initial start
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto p-1 border border-otonmi-border bg-otonmi-frame/50 backdrop-blur-sm relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-otonmi-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-center justify-between p-4 border-b border-otonmi-border bg-otonmi-black/40">
        <div className="flex flex-col items-start">
          <span className="text-xs font-mono text-otonmi-gray">TARGET:</span>
          <span className="text-sm font-bold text-otonmi-light tracking-wide">
            REPO_MONITOR_V1
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xs font-mono text-otonmi-gray">STATUS:</span>
          <span className="text-sm font-bold text-green-500 tracking-wide animate-pulse">
            ACTIVE
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col items-center justify-center">
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Circle SVG */}
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#1f1f1f"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#ff3333"
              strokeWidth="8"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * score) / 100}
              className="transition-all duration-700 ease-out"
            />
          </svg>
          <div className="absolute text-4xl font-mono font-bold text-otonmi-light">
            {score}
          </div>
        </div>
        <span className="mt-4 text-xs font-mono text-otonmi-red">
          RISK LEVEL: HIGH
        </span>
      </div>

      <div className="grid grid-cols-2 text-center border-t border-otonmi-border">
        <div className="p-2 border-r border-otonmi-border">
          <span className="block text-[10px] text-otonmi-gray font-mono">
            VULNERABILITIES
          </span>
          <span className="text-lg font-bold text-otonmi-light">23</span>
        </div>
        <div className="p-2">
          <span className="block text-[10px] text-otonmi-gray font-mono">
            CRITICAL
          </span>
          <span className="text-lg font-bold text-otonmi-red">4</span>
        </div>
      </div>
    </div>
  );
}
