"use client";
import { Spinner } from "@nextui-org/react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { api } from "~/shared/utils/trpc/react";

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active: boolean;
  payload: any;
  label: string;
}) => {
  if (active && payload?.length) {
    let date = payload?.[0]?.value ?? "";
    date = date;
    return (
      <div className="border-gray-700 bg-[#212121]/80 backdrop-blur-md p-2 border rounded-md text-white">
        <p className="label">{label}</p>
        <p className="label">
          {payload[0].name}: {date}
        </p>
        <p className="label">
          {payload[1].name}: {payload[1].value}
        </p>
        <p className="label">
          {payload[2].name}: {payload[2].value}
        </p>
        <p className="label">
          {payload[3].name}: {payload[3].value}
        </p>
      </div>
    );
  }

  return null;
};

const Stats = () => {
  const days = 30;
  const stats = api.time.stats.useQuery(
    {
      days,
    },
    {}
  );
  const data = stats.data;

  const formatDate = (utc: string) => {
    // format like: 10-01
    return utc.slice(5, 10);
  };
  // console.log(data);

  return (
    <div className="flex justify-center items-center bg-[#212121] w-screen h-screen text-white">
      <div className="w-full max-w-4xl h-1/2">
        <div className="flex items-center gap-2 font-bold text-3xl">
          <h1>Last</h1>
          <h1 className="bg-[#9656ef] px-2">{days} days</h1>
          <h1>Stats</h1>
        </div>
        <div className="flex justify-center items-center mt-4 size-full">
          {stats.isLoading ? (
            <Spinner />
          ) : (
            <ResponsiveContainer className={"size-full"}>
              <BarChart
                accessibilityLayer
                data={data}
                className="*:outline-none"
              >
                <Tooltip
                  cursor={{ fill: "rgba(0,0,0,0.2)" }}
                  // @ts-ignore
                  content={<CustomTooltip />}
                />
                <XAxis
                  dataKey="date"
                  interval={1}
                  // rotate={-45}
                  tickLine={false}
                  // tickMargin={10}

                  axisLine={false}
                  tickFormatter={formatDate}
                />
                <Bar
                  name="users"
                  dataKey="users"
                  stackId="a"
                  fill="#B388FF"
                  radius={[0, 0, 4, 4]}
                />{" "}
                <Bar
                  name="forks"
                  dataKey="forks"
                  stackId="a"
                  fill="#58D9F9"
                  radius={[0, 0, 0, 0]}
                />
                <Bar
                  name="views"
                  dataKey="views"
                  stackId="a"
                  fill="#4C53FA"
                  radius={[0, 0, 0, 0]}
                />
                <Bar
                  name="palettes"
                  dataKey="palettes"
                  stackId="a"
                  fill="#A6C42F"
                  radius={[4, 4, 0, 0]}
                />
                <Legend />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
