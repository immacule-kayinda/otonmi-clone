import React from "react";

interface SectionBadgeProps {
  icon: React.ReactNode;
  text: string;
}

export default function SectionBadge({ icon, text }: SectionBadgeProps) {
  return (
    <div className="py-1.5 px-3 uppercase *:text-red-800 bg-red-800/10 flex gap-2 border border-red-800 w-fit items-center rounded-full">
      {icon}
      <span className="text-[10px]">{text}</span>
    </div>
  );
}
