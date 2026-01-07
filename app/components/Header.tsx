import Link from "next/link";
import { MoreHorizontal } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-otonmi-black/90 backdrop-blur-sm border-b border-otonmi-border">
      <div className="px-8 h-20 flex items-center justify-between">
        <div className="flex gap-5">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-otonmi-red rounded-full" />
            <Link
              href="/"
              className="text-base font-bold tracking-[0.2em] text-otonmi-light uppercase"
            >
              OTONMI
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-12 text-[10px] font-mono font-bold tracking-widest text-otonmi-gray">
            <Link
              href="#"
              className="hover:text-otonmi-light transition-colors uppercase text-thin "
            >
              Vectors
            </Link>
            <Link
              href="/dashboard"
              className="hover:text-otonmi-light transition-colors uppercase"
            >
              Auditor
            </Link>
            <Link
              href="#"
              className="hover:text-otonmi-light transition-colors uppercase"
            >
              Threat DB
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 border border-otonmi-border rounded-full group"
          >
            <div className="w-1.5 h-1.5 bg-otonmi-red rounded-full animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-otonmi-gray group-hover:text-otonmi-light">
              AUDITOR ONLINE
            </span>
          </Link>
          <button className="text-otonmi-gray hover:text-otonmi-light">
            <MoreHorizontal size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
