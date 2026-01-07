"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Mock Data for the curve
const data = [
  { time: "00:00", value: 35 },
  { time: "01:00", value: 38 },
  { time: "02:00", value: 41 },
  { time: "03:00", value: 42 },
  { time: "04:00", value: 40 },
  { time: "05:00", value: 38 },
  { time: "06:00", value: 39 },
  { time: "07:00", value: 45 },
  { time: "08:00", value: 55 },
  { time: "09:00", value: 63 },
  { time: "10:00", value: 65 },
  { time: "11:00", value: 60 },
  { time: "12:00", value: 55 },
  { time: "13:00", value: 50 },
  { time: "14:00", value: 48 },
  { time: "15:00", value: 52 },
  { time: "16:00", value: 65 },
  { time: "17:00", value: 72 },
  { time: "18:00", value: 75 },
  { time: "19:00", value: 68 },
  { time: "20:00", value: 62 },
  { time: "21:00", value: 60 },
  { time: "22:00", value: 62 },
  { time: "23:00", value: 65 },
];

export default function RiskChart() {
  return (
    <div className="w-full h-[400px] relative">
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        <div className="w-2 h-2 bg-otonmi-red rounded-full animate-pulse" />
        <span className="text-[10px] font-mono font-bold text-otonmi-red tracking-widest uppercase">
          Live Security Trace
        </span>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff3333" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#ff3333" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#444", fontSize: 10, fontFamily: "monospace" }}
            interval={2}
          />
          <YAxis hide domain={[0, 100]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0a0a0a",
              borderColor: "#1f1f1f",
              borderRadius: "4px",
              fontSize: "12px",
              fontFamily: "monospace",
              color: "#e5e5e5",
            }}
            itemStyle={{ color: "#ff3333" }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#ff3333"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
