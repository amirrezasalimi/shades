"use client";

import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

interface DailyStatsData {
  date: string;
  users: number;
  palettes: number;
  views: number;
  forks: number;
}

interface DailyLineChartProps {
  data: DailyStatsData[];
}

export default function DailyLineChart({ data }: DailyLineChartProps) {
  const chartData = useMemo(() => {
    // Ensure data is sorted chronologically
    return [...data]
      .sort((a, b) => a.date.localeCompare(b.date))
      .map((item) => ({
        ...item,
        // Ensure all values are numeric
        users: Number(item.users) || 0,
        palettes: Number(item.palettes) || 0,
        views: Number(item.views) || 0,
        forks: Number(item.forks) || 0,
        // Format date for display
        formattedDate: new Date(item.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
      }));
  }, [data]);

  console.log("Chart data:", chartData);

  // Calculate reasonable intervals for x-axis ticks based on data length
  const tickInterval = Math.max(1, Math.floor(chartData.length / 10));

  // Calculate max value for y-axis
  const maxValue = useMemo(() => {
    let max = 0;
    chartData.forEach((item) => {
      max = Math.max(max, item.palettes, item.users, item.views, item.forks);
    });
    return max === 0 ? 10 : Math.ceil(max * 1.1); // Add 10% padding, ensure non-zero
  }, [chartData]);

  if (chartData.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-full text-gray-400">
        No data available
      </div>
    );
  }

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis
            dataKey="formattedDate"
            tick={{ fill: "#9ca3af" }}
            axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
            tickLine={{ stroke: "rgba(255,255,255,0.2)" }}
            interval={tickInterval}
            angle={-15}
            textAnchor="end"
            height={50}
          />
          <YAxis
            tick={{ fill: "#9ca3af" }}
            axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
            tickLine={{ stroke: "rgba(255,255,255,0.2)" }}
            domain={[0, maxValue]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(23,23,23,0.9)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
            }}
            formatter={(value, name) => [value, name]}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Legend iconType="circle" verticalAlign="top" height={36} />
          <ReferenceLine y={0} stroke="rgba(255,255,255,0.2)" />

          <Line
            type="monotone"
            dataKey="palettes"
            stroke="#22c55e" // Green to match your palette colors
            strokeWidth={2}
            dot={{ r: 3, strokeWidth: 1, fill: "#22c55e" }}
            activeDot={{ r: 5 }}
            name="Palettes"
            isAnimationActive={true}
          />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#8b5cf6" // Purple to match your palette colors
            strokeWidth={2}
            dot={{ r: 3, strokeWidth: 1, fill: "#8b5cf6" }}
            activeDot={{ r: 5 }}
            name="Users"
            isAnimationActive={true}
          />
          <Line
            type="monotone"
            dataKey="views"
            stroke="#06b6d4" // Cyan to match your palette colors
            strokeWidth={2}
            dot={{ r: 3, strokeWidth: 1, fill: "#06b6d4" }}
            activeDot={{ r: 5 }}
            name="Views"
            isAnimationActive={true}
          />
          <Line
            type="monotone"
            dataKey="forks"
            stroke="#f59e0b" // Amber for forks
            strokeWidth={2}
            dot={{ r: 3, strokeWidth: 1, fill: "#f59e0b" }}
            activeDot={{ r: 5 }}
            name="Forks"
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
