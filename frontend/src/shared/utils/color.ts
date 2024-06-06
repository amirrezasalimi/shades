import Values from 'values.js'

function hexToRgb(hex: string): { r: number, g: number, b: number } {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
}

function rgbToHex(r: number, g: number, b: number): string {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

export default function generateShades(hexColor: string): Record<string, string> {
    const values = new Values(hexColor, "base", 500);
    const shades = values.all(20).map((shade) => shade.hexString())
    const shadesCodes = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"]
    const shadesObj: Record<string, string> = {}
    shades.forEach((shade, index) => {
        if (shadesCodes[index]) {
            shadesObj[shadesCodes?.[index] ?? ""] = shade;
        }
    })
    return shadesObj;
}

export const colorContrast = (color: string): string => {
    // dark or light
    const { r, g, b } = hexToRgb(color);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 125 ? "#000000" : "#ffffff";

}
