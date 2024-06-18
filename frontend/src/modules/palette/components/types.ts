type ColorShades = Record<number, string>;

export interface Color {
  primary?: ColorShades;
  text?: ColorShades;
  neutral?: ColorShades;
  secondary?: ColorShades;
  background?: ColorShades;
}
