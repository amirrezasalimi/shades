export type ColorPalette = Record<string, {
    name: string,
    hex: string,
    shades: Record<number, string>
}>;