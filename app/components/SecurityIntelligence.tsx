import { Shield, ShieldBan } from "lucide-react";
import SectionBadge from "./ui/SectionBadge";
import { Span } from "next/dist/trace";
import { title } from "process";
/*
04
Attack Vectors Analyzed
LIVE
Threat Scoring
SYNC
OSV Integration
ZERO
Configuration
Mettre ça dans un tableau et
 */

const tableau = [
  {
    title: "04",
    details: "Attack Vectors Analyzed",
  },
  {
    title: "LIVE",
    details: "Threat Scoring",
  },
  {
    title: "SYNC",
    details: "OSV integration",
  },
  {
    title: "Zero",
    details: "Configuration",
  },
];

export default function SecurityIntelligence() {
  return (
    <section className="flex flex-col gap-12 border-t border-otonmi-border p-14">
      <SectionBadge
        icon={<Shield className="w-4 h-4" />}
        text="Security Intelligence"
      />

      <p className="text-7xl font-medium py-12">
        Autonomous security intelligence{" "}
        <span className="text-neutral-700">
          for GitHub repositories. Delivers a threat assessment with risk
          scoring in{" "}
        </span>
        seconds, not hours.
      </p>
      <div className="flex gap-36 border-t border-otonmi-border py-12">
        {tableau.map((item) => (
          <div className="flex flex-col gap-2">
            <span className="text-6xl font-bold uppercase">{item.title}</span>
            <span className="text-otonmi-gray/60 uppercase font-light font-mono">
              {item.details}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
