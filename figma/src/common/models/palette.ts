export type Palette = Record<string, {
    name: string,
    hex: string,
    shades: Record<number, string>
}>;