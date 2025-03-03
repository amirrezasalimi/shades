import { Card, CardBody, CardHeader } from "@nextui-org/react";

interface StatsCardProps {
  title: string;
  children: React.ReactNode;
  className?: string; // Make className optional
}

export const StatsCard = ({ title, children, className }: StatsCardProps) => {
  return (
    <Card className={`bg-[#212121]/80 ${className ?? ""}`}>
      <CardHeader className="font-bold text-white text-lg">{title}</CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};
