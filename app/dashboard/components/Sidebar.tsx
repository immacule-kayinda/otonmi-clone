import Link from "next/link";
import {
  LayoutGrid,
  Shield,
  Activity,
  Key,
  Box,
  Settings,
  FileText,
  LogOut,
  Terminal,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-otonmi-black border-r border-otonmi-border flex flex-col fixed top-0 left-0 z-40">
      {/* Logo Area */}
      <div className="h-16 flex items-center px-6 border-b border-otonmi-border">
        <div className="w-2 h-2 bg-otonmi-red animate-pulse mr-3" />
        <span className="text-lg font-bold tracking-widest text-otonmi-light">
          OTONMI
        </span>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-8">
        {/* Main Menu */}
        <div className="flex flex-col gap-1">
          <NavItem icon={<LayoutGrid size={18} />} label="OVERVIEW" active />
          <NavItem icon={<Shield size={18} />} label="REPOSITORIES" />
          <NavItem icon={<Activity size={18} />} label="INTEL FEED" badge="3" />
        </div>

        {/* Vectors */}
        <div>
          <h3 className="text-xs font-mono text-otonmi-gray/50 mb-3 px-2">
            VECTORS
          </h3>
          <div className="flex flex-col gap-1">
            <NavItem icon={<Key size={18} />} label="SECRETS" />
            <NavItem icon={<Box size={18} />} label="DEPENDENCIES" />
            <NavItem icon={<Terminal size={18} />} label="CONFIGS" />
          </div>
        </div>

        {/* System */}
        <div>
          <h3 className="text-xs font-mono text-otonmi-gray/50 mb-3 px-2">
            SYSTEM
          </h3>
          <div className="flex flex-col gap-1">
            <NavItem icon={<Settings size={18} />} label="INTEGRATIONS" />
            <NavItem icon={<Shield size={18} />} label="POLICY" />
            <NavItem icon={<FileText size={18} />} label="DOCUMENTATION" />
          </div>
        </div>
      </div>

      {/* Footer / Logout */}
      <div className="p-6 border-t border-otonmi-border">
        <button className="flex items-center gap-3 text-sm font-mono text-otonmi-gray hover:text-otonmi-red transition-colors w-full">
          <LogOut size={18} />
          LOG OUT
        </button>
      </div>
    </aside>
  );
}

function NavItem({
  icon,
  label,
  badge,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  badge?: string;
  active?: boolean;
}) {
  return (
    <Link
      href="#"
      className={`
        flex items-center justify-between px-3 py-2 rounded-md transition-all group
        ${
          active
            ? "bg-otonmi-red/10 text-otonmi-red"
            : "text-otonmi-gray hover:text-otonmi-light hover:bg-otonmi-frame"
        }
      `}
    >
      <div className="flex items-center gap-3">
        <span
          className={`${
            active ? "text-otonmi-red" : "group-hover:text-otonmi-light"
          }`}
        >
          {icon}
        </span>
        <span className="text-xs font-bold tracking-wider">{label}</span>
      </div>
      {badge && (
        <span className="bg-otonmi-red text-otonmi-black text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
          {badge}
        </span>
      )}
    </Link>
  );
}
