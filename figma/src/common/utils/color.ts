import { isValidColor } from "./color-wheel";

export function convertHexToRgbRange(hex: string): [number, number, number] {
  const hexValue = hex.replace("#", "");
  const r = parseInt(hexValue.substring(0, 2), 16) / 255;
  const g = parseInt(hexValue.substring(2, 4), 16) / 255;
  const b = parseInt(hexValue.substring(4, 6), 16) / 255;
  // r: 0-1, g: 0-1, b: 0-1
  return [r, g, b];
}

const generateShades = (
  hex: string,
  count: number = 10
): Record<number, string> => {
  if (!hex.startsWith("#")) hex = "#" + hex;
  if (!/^#([0-9A-Fa-f]{6})$/.test(hex)) {
    console.error("Invalid hex color");
    return {};
  }
  const hexToRgb = (h: string): [number, number, number] => {
    const v = h.slice(1);
    return [
      parseInt(v.slice(0, 2), 16),
      parseInt(v.slice(2, 4), 16),
      parseInt(v.slice(4, 6), 16),
    ];
  };
  const rgbToHsl = ([r, g, b]: number[]): [number, number, number] => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h = 0,
      s = 0,
      l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return [h, s, l];
  };
  const hslToRgb = ([h, s, l]: number[]): [number, number, number] => {
    let r: number, g: number, b: number;
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number): number => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  };
  const rgbToHex = ([r, g, b]: number[]): string =>
    "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");

  const [r, g, b] = hexToRgb(hex);
  const [h, s] = rgbToHsl([r, g, b]);
  const shadeLevels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].slice(
    0,
    count
  );
  return shadeLevels.reduce((acc, level, i) => {
    const t = count > 1 ? i / (count - 1) : 0;
    const newL = 1 - t;
    const [nr, ng, nb] = hslToRgb([h, s, newL]);
    acc[level] = rgbToHex([nr, ng, nb]);
    return acc;
  }, {} as Record<number, string>);
};

function getNeutralColor(hex: string) {
  // Remove # if present and ensure valid 6-digit hex
  hex = hex.replace("#", "");
  if (!isValidColor(hex)) {
    // throw new Error("Invalid hex color. Use format #RRGGBB");
    return "#FFFFFF";
  }

  // Convert hex to RGB
  try {
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Check if any RGB values are NaN
    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      return "#FFFFFF";
    }

    // Calculate luminance for grayscale (perceptual weights)
    const luminance = Math.round(0.299 * r + 0.587 * g + 0.114 * b);

    // Convert luminance to 2-digit hex
    const grayHex = luminance.toString(16).padStart(2, "0");

    // Return grayscale hex
    return `#${grayHex}${grayHex}${grayHex}`;
  } catch (error) {
    return "#FFFFFF"; // Return white as fallback
  }
}

export { generateShades, getNeutralColor };
