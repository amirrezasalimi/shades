"use client";
import { Skeleton, Spinner } from "@nextui-org/react";
import { api } from "~/shared/utils/trpc/react";
import { useState } from "react";
import { TimeframeSelector } from "./components/TimeframeSelector";
import { StatsCard } from "./components/StatsCard";
import { ModelUsageChart } from "./components/ModelUsageChart";
import { GrowthChart } from "./components/GrowthChart";
import DailyLineChart from "./components/DailyLineChart";

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
  const dailyActivity = api.time.dailyActivity.useQuery({ days: selectedDays });

  if (stats.isLoading || detailedStats.isLoading || dailyActivity.isLoading) {
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

        {/* Daily Activity Line Chart */}
        <StatsCard
          title="Daily Activity"
          className="lg:col-span-2 bg-white/5 backdrop-blur-sm p-6 border border-white/10"
        >
          <div className="h-[400px]">
            {dailyActivity.isLoading ? (
              <div className="w-full h-full">
                <Skeleton className="w-full h-full" />
              </div>
            ) : dailyActivity.data && dailyActivity.data.length > 0 ? (
              <DailyLineChart data={dailyActivity.data} />
            ) : (
              <div className="flex justify-center items-center w-full h-full text-gray-400">
                No activity data available for the selected time period
              </div>
            )}
          </div>
        </StatsCard>
      </div>
    </div>
  );
};

export default Stats;
