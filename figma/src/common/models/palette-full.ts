import { ColorPalette } from "./palette";

export default interface PaletteFull {
    id: string;
    prompt: string;
    description: string;
    colors: Record<string, string>;
    fullColors?: ColorPalette
}