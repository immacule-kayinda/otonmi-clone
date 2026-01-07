import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import RiskChart from "./components/RiskChart";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-otonmi-black flex font-sans">
      <Sidebar />

      <div className="flex-1 ml-64 flex flex-col">
        <DashboardHeader />

        <main className="flex-1 p-8 overflow-y-auto">
          {/* Risk Variance Matrix Section */}
          <section className="border border-otonmi-border bg-otonmi-black/50 rounded-lg overflow-hidden relative mb-8">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-otonmi-border bg-otonmi-frame/30">
              <h2 className="text-sm font-bold tracking-widest text-otonmi-light uppercase">
                Risk Variance Matrix
              </h2>
              <div className="flex gap-2">
                <div className="px-2 py-1 bg-otonmi-border/30 rounded text-[10px] font-mono text-otonmi-gray">
                  1H
                </div>
                <div className="px-2 py-1 bg-otonmi-red text-otonmi-light rounded text-[10px] font-mono font-bold">
                  1D
                </div>
                <div className="px-2 py-1 bg-otonmi-border/30 rounded text-[10px] font-mono text-otonmi-gray">
                  1W
                </div>
                <div className="px-2 py-1 bg-otonmi-border/30 rounded text-[10px] font-mono text-otonmi-gray">
                  1M
                </div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="p-4 relative">
              <RiskChart />
            </div>

            {/* Metrics Footer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-t border-otonmi-border bg-otonmi-frame/20">
              <MetricItem label="AVG RISK LEVEL" value="42%" />
              <MetricItem label="PEAK SEVERITY" value="CRITICAL" highlight />
              <MetricItem label="AUDIT VELOCITY" value="1.2s/KB" />
              <MetricItem label="INTEL CONFIDENCE" value="99.8%" />
            </div>
          </section>

          {/* Footer Status Line */}
          <div className="mt-auto pt-8 border-t border-otonmi-border/30 flex justify-between items-center text-[10px] font-mono text-otonmi-gray/50 uppercase tracking-wider">
            <div className="flex gap-8">
              <span>SCAN VELOCITY: 4,200 FILES/SECOND</span>
              <span>ENGINE STATUS: NOMINAL</span>
              <span>CRYPTO-CHECK: VERIFIED</span>
            </div>
            <span>LAST SYSTEM SYNC: 2026-01-05 08:45:12</span>
          </div>
        </main>
      </div>
    </div>
  );
}

function MetricItem({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] font-mono font-bold text-otonmi-gray mb-1 uppercase tracking-wider">
        {label}
      </span>
      <span
        className={`text-2xl font-bold tracking-tight ${
          highlight ? "text-otonmi-light" : "text-otonmi-light"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
