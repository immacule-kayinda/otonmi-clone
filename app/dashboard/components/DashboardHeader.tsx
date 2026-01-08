import { Search, Bell, Settings, User } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="h-16 border-b border-otonmi-border bg-otonmi-black flex items-center justify-between px-8 sticky top-0 z-30">
      {/* Breadcrumbs */}
      <div className="flex items-center text-[10px] font-mono tracking-wider">
        <span className="text-otonmi-gray">REPOSITORIES</span>
        <span className="mx-2 text-otonmi-border">/</span>
        <span className="text-otonmi-light font-bold">AUDIT DASHBOARD</span>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-xl mx-8 relative group">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-otonmi-gray group-focus-within:text-otonmi-red transition-colors">
          <Search size={14} />
        </div>
        <input
          type="text"
          placeholder="SEARCH THREAT VECTORS"
          className="w-full bg-otonmi-frame border border-otonmi-border rounded-full py-2 pl-10 pr-4 text-[10px] font-mono text-otonmi-light focus:outline-none focus:border-otonmi-red focus:bg-otonmi-black transition-all placeholder:text-otonmi-gray/50"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        {/* Version Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-otonmi-frame border border-otonmi-border rounded-full">
          <div className="w-1.5 h-1.5 bg-otonmi-red rounded-full animate-pulse" />
          <span className="text-[10px] font-mono font-bold text-otonmi-gray">
            AUDITOR V1.1.0-STABLE
          </span>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-otonmi-gray">
          <button className="hover:text-otonmi-light transition-colors">
            <Bell size={16} />
          </button>
          <button className="hover:text-otonmi-light transition-colors">
            <Settings size={16} />
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-6 border-l border-otonmi-border">
          <div className="w-8 h-8 rounded-full bg-otonmi-red/10 border border-otonmi-red/30 flex items-center justify-center text-otonmi-red">
            <User size={14} />
          </div>
          <div className="hidden xl:flex flex-col">
            <span className="text-[10px] font-bold text-otonmi-light tracking-wide uppercase">
              LAWRENCE_A
            </span>
            <span className="text-[9px] text-otonmi-gray font-mono">
              SOVEREIGN NODE
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
