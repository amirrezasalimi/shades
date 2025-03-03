import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface GrowthData {
  date: string;
  total: number;
}

export const GrowthChart = ({ data }: { data: GrowthData[] }) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean;
    payload?: any[];
    label?: string;
  }) => {
    if (active && payload?.length && label) {
      return (
        <div className="bg-white dark:bg-gray-800 shadow-lg p-2 border border-gray-200 dark:border-gray-700 rounded">
          <p className="text-sm">{formatDate(label)}</p>
          <p className="font-semibold text-sm">
            {payload[0].value} total palettes
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
        <XAxis
          dataKey="date"
          tickFormatter={formatDate}
          interval="preserveStartEnd"
        />
        <YAxis width={50} />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="natural"
          dataKey="total"
          stroke="rgb(168 85 247)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
