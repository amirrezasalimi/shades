interface Props {
  className?: string;
}
export default function Logo({ className }: Props) {
  return <img src="/logo.svg" alt="Logo" className={className} />;
}
