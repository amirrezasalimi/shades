import { Button, ButtonGroup } from "@nextui-org/react";

interface TimeframeSelectorProps {
  selected: number;
  onChange: (days: number) => void;
}

const timeframes = [
  { label: "7D", value: 7 },
  { label: "14D", value: 14 },
  { label: "30D", value: 30 },
  { label: "90D", value: 90 },
];

export const TimeframeSelector = ({
  selected,
  onChange,
}: TimeframeSelectorProps) => {
  return (
    <ButtonGroup>
      {timeframes.map((tf) => (
        <Button
          key={tf.value}
          color={selected === tf.value ? "primary" : "default"}
          onClick={() => onChange(tf.value)}
        >
          {tf.label}
        </Button>
      ))}
    </ButtonGroup>
  );
};
