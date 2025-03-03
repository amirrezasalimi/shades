"use client";
import { Spinner } from "@nextui-org/react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { api } from "~/shared/utils/trpc/react";
import { useState } from "react";
import { TimeframeSelector } from "./components/TimeframeSelector";
import { StatsCard } from "./components/StatsCard";
import { ModelUsageChart } from "./components/ModelUsageChart";
import { GrowthChart } from "./components/GrowthChart";

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

type MetricTotals = {
  users: number;
  palettes: number;
  views: number;
  forks: number;
};

const Stats = () => {
  const [selectedDays, setSelectedDays] = useState(30);
  const stats = api.time.stats.useQuery({ days: selectedDays });
  const detailedStats = api.time.detailedStats.useQuery({ days: selectedDays });

  if (stats.isLoading || detailedStats.isLoading) {
    return (
      <div className="flex justify-center items-center bg-black/95 min-h-screen">
        <Spinner size="lg" color="primary" />
      </div>
    );
  }

  return (
    <div className="bg-black/95 min-h-screen text-white">
      {/* Header Section */}
      <div className="top-0 z-10 sticky bg-black/40 backdrop-blur-xl border-white/10 border-b">
        <div className="mx-auto px-6 py-4 max-w-[90rem]">
          <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 font-extrabold text-transparent text-4xl">
                Statistics
              </h1>
              <p className="mt-1 text-gray-400">
                Analyzing the last {selectedDays} days of activity
              </p>
            </div>
            <TimeframeSelector
              selected={selectedDays}
              onChange={setSelectedDays}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8 mx-auto px-6 py-8 max-w-[90rem]">
        {/* Summary Cards */}
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {["Users", "Palettes", "Views", "Forks"].map((metric) => (
            <StatsCard
              key={metric}
              title={metric}
              className="bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 transition-colors"
            >
              <div className="bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 font-bold text-transparent text-4xl">
                {detailedStats.data?.totals[
                  metric.toLowerCase() as keyof MetricTotals
                ] ?? 0}
              </div>
            </StatsCard>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
          <StatsCard
            title="Activity Overview"
            className="lg:col-span-2 bg-white/5 backdrop-blur-sm p-6 border border-white/10"
          >
            <div className="h-[400px]">
              <ResponsiveContainer>
                <BarChart data={stats.data} className="*:outline-none">
                  <Tooltip cursor={{ fill: "rgba(255,255,255,0.05)" }} />
                  <XAxis
                    dataKey="date"
                    tickFormatter={formatDate}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9ca3af" }}
                  />
                  <Bar
                    dataKey="users"
                    stackId="a"
                    fill="#8b5cf6"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="forks"
                    stackId="a"
                    fill="#3b82f6"
                    radius={[0, 0, 0, 0]}
                  />
                  <Bar
                    dataKey="views"
                    stackId="a"
                    fill="#06b6d4"
                    radius={[0, 0, 0, 0]}
                  />
                  <Bar
                    dataKey="palettes"
                    stackId="a"
                    fill="#22c55e"
                    radius={[0, 0, 4, 4]}
                  />
                  <Legend iconType="circle" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </StatsCard>

          <StatsCard
            title="Model Usage"
            className="bg-white/5 backdrop-blur-sm p-6 border border-white/10"
          >
            <ModelUsageChart data={detailedStats.data?.models ?? {}} />
          </StatsCard>

          <StatsCard
            title="Traffic Sources"
            className="bg-white/5 backdrop-blur-sm p-6 border border-white/10"
          >
            <ModelUsageChart data={detailedStats.data?.referral ?? {}} />
          </StatsCard>

          <StatsCard
            title="Palette Growth"
            className="lg:col-span-2 bg-white/5 backdrop-blur-sm p-6 border border-white/10"
          >
            <GrowthChart data={detailedStats.data?.growth ?? []} />
          </StatsCard>
        </div>
      </div>
    </div>
  );
};

export default Stats;
