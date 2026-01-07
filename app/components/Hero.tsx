import Link from "next/link";
import { ArrowRight, Flashlight, Info, Play, ShieldAlert } from "lucide-react";
import Decorations from "./Decorations";
import Image from "next/image";
import clsx from "clsx";

const decorations: {
  name: string;
  description: string;
  role: string;
}[] = [
  {
    name: "Prot_01",
    role: "4 vectors",
    description: "analyzed per scan",
  },
  {
    name: "prot_2",
    role: "scoring",
    description: "real-time threat level",
  },
  {
    name: "PROT_03",
    role: "OSV DB",
    description: "GLOBAL VULNERABILITY SYNC",
  },
];

export default function Hero() {
  return (
    <section className="flex items-center">
      <div className="mx-auto w-full grid grid-cols-1 lg:grid-cols-9 items-center divide-x divide-otonmi-border">
        {/* Left Content */}
        <div className="col-span-4 px-12">
          <div className="py-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-otonmi-border bg-otonmi-frame/50 mb-8 max-w-fit">
              <div className="w-1 h-1 bg-otonmi-red" />
              <span className="text-[10px] font-mono text-otonmi-red tracking-widest uppercase">
                SEC-PROTOCOL // INITIALIZE
              </span>
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              <span className="block text-otonmi-light">REPO</span>
              <span className="block text-otonmi-gray/50">AUDITOR</span>
            </h1>

            {/* Description */}
            <p className="text-otonmi-gray text-lg max-w-md mb-12 font-sans leading-relaxed">
              Autonomous threat detection for modern codebases. Identifying
              attack vectors before they become breaches.
            </p>

            {/* Input & Action */}
            <div className="max-w-md">
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="GITHUB REPOSITORY URL"
                  className="w-full bg-transparent border border-otonmi-border p-4 text-xs font-mono tracking-widest text-otonmi-light placeholder:text-otonmi-gray/30 focus:outline-none focus:border-otonmi-red transition-colors"
                />
              </div>

              <Link
                href="/dashboard"
                className="group inline-flex items-center gap-4 px-8 py-4 bg-transparent border border-otonmi-border text-otonmi-light text-xs font-bold tracking-[0.2em] hover:bg-otonmi-light hover:text-otonmi-black transition-all"
              >
                START AUDIT
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>

          <div className="border-t border-otonmi-border py-10">
            <Play className="text-otonmi-red" />
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="h-full col-span-5 grid grid-cols-5 overflow-hidden divide-x divide-otonmi-border">
          <div className="col-span-3 flex flex-col">
            <div className="relative w-full">
              <div className="absolute top-0 right-0 flex justify-end p-3 w-full z-30">
                <div className="w-10 h-10 border border-otonmi-border rounded-full flex items-center justify-center text-otonmi-light hover:bg-otonmi-white/10 cursor-pointer">
                  <ArrowRight size={16} className="-rotate-45" />
                </div>
              </div>
              <div className="absolute z-30 bottom-2 left-2">
                <div className="flex items-center px-2 py-1 bg-otonmi-black/20 border border-otonmi-border">
                  <span className="text-[10px] font-mono font-light text-otonmi-light tracking-widest">
                    SECURITY ENGINE V2.0
                  </span>
                </div>
              </div>
              <div className="bg-black/60 absolute w-full h-full"></div>
              <Image
                src={"/circuit-board.png"}
                alt="circuit board"
                width={1000}
                height={400}
                className="object-cover h-[500px]"
              />
            </div>

            <div className="px-8 py-12 gap-y-8 grid">
              <div className="flex items-end justify-between">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-otonmi-red" />
                  <div className="w-2 h-2 bg-otonmi-gray/30" />
                  <div className="w-2 h-2 bg-otonmi-gray/30" />
                </div>

                <ShieldAlert size={16} className="text-otonmi-gray" />
              </div>
              <div>
                <div className="flex items-start">
                  <span className="text-6xl font-bold">100</span>
                  <span className="text-lg text-neutral-600">%</span>
                </div>
                <span className="font-light uppercase font-mono text-neutral-700">
                  audit integrity
                </span>
              </div>
              <div className="grid gap-5">
                <div className="h-0.5 w-full bg-otonmi-red/20 mb-1" />
                <div className="flex justify-between">
                  {["secrets", "deps", "config", "auth"].map((name, index) => (
                    <span
                      key={index}
                      className={clsx(
                        "font-mono font-light text-[12px] ",
                        index === 2 ? "text-neutral-200" : "text-neutral-600"
                      )}
                    >
                      {name.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden xl:block col-span-2">
            {decorations.map((deco) => (
              <Decorations key={deco.name} {...deco} />
            ))}
            <div className="text-right">
              <span className="block text-[10px] font-mono text-otonmi-gray mb-1 uppercase">
                zero config required
              </span>
              <h3 className="text-2xl font-bold text-otonmi-light uppercase">
                Initialize
              </h3>
              <Flashlight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
