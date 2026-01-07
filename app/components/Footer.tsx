import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const links = ["auditor", "threat db", "security"];
const fields = ["product", "ressources", "company", "legal"];

export default function Footer() {
  return (
    <footer className="border-t border-otonmi-border bg-otonmi-black py-12">
      <div className="px-16 gap-8 grid grid-cols-1 md:grid-cols-7 w-full">
        <div className="col-span-2 flex items-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <h3 className="font-bold tracking-widest text-otonmi-light font-mono">
                OTONMI
              </h3>
            </div>
            <p className="text-sm text-otonmi-gray max-w-xs uppercase">
              Autonomous security intelligence for GitHub repositories.
              Identifying attack vectors before they become breaches.
            </p>
          </div>
        </div>

        <div className="flex gap-12 text-sm text-otonmi-gray justify-between col-span-5">
          {fields.map((field) => (
            <div key={field} className="flex flex-col gap-4 uppercase">
              <span className="font-bold text-otonmi-light">{field}</span>
              <div className="flex gap-2 flex-col">
                {links.map((link) => (
                  <Link
                    href="#"
                    key={link}
                    className="hover:text-otonmi-red text-xs transition-colors duration-300"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-otonmi-border/50 flex justify-between items-center text-xs text-otonmi-gray w-full uppercase font-mono">
        <p>© 2026 Otonmi Inc. Codebase Secured.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-otonmi-light transition-colors">
            {/* X (Twitter) */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
              aria-label="X"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zl-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
          <Link href="#" className="hover:text-otonmi-light transition-colors">
            <Github className="w-4 h-4" />
          </Link>
          <Link href="#" className="hover:text-otonmi-light transition-colors">
            <Linkedin className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
