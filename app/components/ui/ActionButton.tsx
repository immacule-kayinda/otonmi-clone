import clsx from "clsx";
import React from "react";

interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function ActionButton({
  children,
  className,
  ...props
}: ActionButtonProps) {
  return (
    <button
      className={clsx(
        "flex items-center gap-16 uppercase text-[10px] border border-otonmi-border px-8 py-5 transition-all font-mono duration-300",
        "hover:-translate-y-1 hover:bg-otonmi-red hover:text-white hover:border-otonmi-red hover:shadow-[0_0_30px_-5px_rgba(255,0,0,0.6)]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
