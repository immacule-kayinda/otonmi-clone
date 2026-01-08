import {
  AlertOctagon,
  Box,
  ChartBar,
  ChartBarStackedIcon,
  ChartColumnBig,
  Cpu,
  Github,
  Key,
  Settings,
  Zap,
} from "lucide-react";
import SectionBadge from "./SectionBadge";
import ActionButton from "./ActionButton";

/**
 * SECRETS
Identify leaked API keys, tokens, and hardcoded credentials before they are exploited.

DEPENDENCIES
Cross-reference dependencies with the Open Source Vulnerability (OSV) database.

CONFIGURATIONS
Detect misconfigured repository settings and branch protection failures.

THREAT SCORING
Dynamic risk assessments based on severity, exploitability, and exposure level.

AUTONOMOUS
No manual rule-setting required. Our auditor reasons through findings automatically.

GITHUB NATIVE
Seamlessly connects to public and private repositories via secure Oauth or PAT.
 */

const elements: {
  title: string;
  icon?: React.ReactNode;
  description: string;
}[] = [
  {
    title: "SECRETS",
    icon: <Key className="w-4 h-4" />,
    description:
      "Identify leaked API keys, tokens, and hardcoded credentials before they are exploited.",
  },
  {
    title: "DEPENDENCIES",
    icon: <Box className="w-4 h-4" />,
    description:
      "Cross-reference dependencies with the Open Source Vulnerability (OSV) database.",
  },
  {
    title: "CONFIGURATIONS",
    icon: <Settings className="w-4 h-4" />,
    description:
      "Detect misconfigured repository settings and branch protection failures.",
  },
  {
    title: "THREAT SCORING",
    icon: <ChartColumnBig className="w-4 h-4" />,
    description:
      "Dynamic risk assessments based on severity, exploitability, and exposure level.",
  },
  {
    title: "AUTONOMOUS",
    icon: <Cpu className="w-4 h-4" />,
    description:
      "No manual rule-setting required. Our auditor reasons through findings automatically.",
  },
  {
    title: "GITHUB NATIVE",
    icon: <Github className="w-4 h-4" />,
    description:
      "Seamlessly connects to public and private repositories via secure Oauth or PAT.",
  },
];

export default function ProtocolCore() {
  return (
    <section className="w-full border-t border-otonmi-border grid grid-cols-12 divide-x divide-otonmi-border">
      <div className="px-12 py-12 col-span-5 flex flex-col justify-between">
        <div>
          <SectionBadge
            icon={<AlertOctagon className="w-4 h-4" />}
            text="Protocole core"
          />
          <h1 className="text-7xl font-bold py-12">
            <span className="text-neutral-700">
              CODE
              <br />
            </span>
            INTELLIGENCE <br />
            <span className="text-neutral-700">
              &<br />{" "}
            </span>{" "}
            AUDIT
          </h1>
          <p className="uppercase text-neutral-600 text-xl">
            Scanning for exposed credentials, vulnerable dependencies, and
            misconfigurations in real-time.
          </p>
        </div>
        <ActionButton className="mt-12 w-fit">
          Initialize Scan <Zap className="w-4 h-4 fill-current" />
        </ActionButton>
      </div>
      <div className="grid grid-cols-2 col-span-7 divide-otonmi-border divide-x divide-y">
        {elements.map((el) => (
          <div className="p-8 gap-y-4 flex flex-col group relative hover:bg-red-950/10 transition-colors duration-300">
            <div className="absolute bottom-0 left-0 right-0 h-px bg-otonmi-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <div className="w-12 h-12 flex items-center group-hover:text-red-800 justify-center border rounded-lg border-otonmi-border group-hover:border-red-800 transition-colors duration-300">
              {el.icon}
            </div>
            <div className="uppercase font-bold text-2xl ">{el.title}</div>
            <div className="text-neutral-600 uppercase transition-colors">
              {el.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
