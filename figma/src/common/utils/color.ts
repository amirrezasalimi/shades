export function convertHexToRgbRange(hex: string): [number, number, number] {
  const hexValue = hex.replace("#", "");
  const r = parseInt(hexValue.substring(0, 2), 16) / 255;
  const g = parseInt(hexValue.substring(2, 4), 16) / 255;
  const b = parseInt(hexValue.substring(4, 6), 16) / 255;
  // r: 0-1, g: 0-1, b: 0-1
  return [r, g, b];
}

const generateShades = (hex: string): Record<number, string> => {
  // Validate hex input
  if (!hex) {
    console.error("Invalid hex color provided");
    return {}; // Return empty object if hex is invalid
  }

  // Normalize hex input
  hex = hex.replace(/^#/, "");
  if (hex.length === 3 && typeof hex === "string") {
    const [h1 = "", h2 = "", h3 = ""] = hex;
    hex = h1 + h1 + h2 + h2 + h3 + h3;
  }

  // Validate hex format
  if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
    console.error("Invalid hex color format");
    return {};
  }

  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Convert RGB to HSL
  const rgbToHsl = (
    r: number,
    g: number,
    b: number
  ): [number, number, number] => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

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

  // Convert HSL to RGB
  const hslToRgb = (
    h: number,
    s: number,
    l: number
  ): [number, number, number] => {
    let r, g, b;

    if (s === 0) {
      r = g = b = l; // achromatic
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

  // Convert RGB to hex
  const rgbToHex = (r: number, g: number, b: number): string => {
    const toHex = (c: number): string => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  const [h, s, l] = rgbToHsl(r, g, b);

  // Generate shades by adjusting lightness
  const shades: Record<number, string> = {};

  // Define the shade levels from 950 (darkest) to 50 (lightest)
  const shadeLevels = [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50];

  // Create a mapping from shade level to lightness value
  // With special handling for very light or very dark colors
  const shadeToLightness = (shade: number): number => {
    // Determine if the base color is very light or very dark
    const isVeryLight = l > 0.9;
    const isVeryDark = l < 0.1;

    // Handle special cases for extreme colors
    if (isVeryLight) {
      // For very light colors (like #fafafa), adjust the reference point
      // Consider the input color as shade 100 instead of 500
      if (shade === 100) {
        return l; // Keep original lightness for shade 100
      } else if (shade < 100) {
        // For shade 50, go slightly lighter but cap at 0.98 to avoid pure white
        return Math.min(0.98, l + 0.02);
      } else {
        // For darker shades, create a better distribution from light to dark
        // Map 100->l, 950->0.05
        const darkRatio = (shade - 100) / 850;
        return l * (1 - darkRatio) + 0.05 * darkRatio;
      }
    } else if (isVeryDark) {
      // For very dark colors, consider the input color as shade 900
      // Similar logic but inverted from the light case
      if (shade === 900) {
        return l;
      } else if (shade > 900) {
        return Math.max(0.02, l - 0.02); // Slightly darker but avoid pure black
      } else {
        // For lighter shades, create a better distribution
        const lightRatio = (900 - shade) / 850;
        return l * (1 - lightRatio) + 0.95 * lightRatio;
      }
    } else {
      // Normal case - input is middle range color (use as 500)
      if (shade === 500) {
        return l;
      } else if (shade > 500) {
        const darkRatio = (shade - 500) / 450;
        return l * (1 - darkRatio) + 0.05 * darkRatio;
      } else {
        const lightRatio = (500 - shade) / 450;
        return l * (1 - lightRatio) + 0.95 * lightRatio;
      }
    }
  };

  // Generate the shades
  shadeLevels.forEach((shade) => {
    // Calculate new lightness for this shade
    const newLightness = shadeToLightness(shade);

    // Preserve hue and adjust saturation
    let newSaturation = s;

    // For very light colors, boost saturation slightly in middle shades
    // to maintain color identity
    if (l > 0.9 && shade >= 300 && shade <= 700) {
      newSaturation = Math.min(1, s * 1.2);
    } else if (shade >= 800) {
      // Slightly reduce saturation for very dark shades
      newSaturation = Math.max(0, s * 0.9);
    } else if (shade <= 200) {
      // Slightly reduce saturation for very light shades
      newSaturation = Math.max(0, s * 0.8);
    }

    // Convert back to RGB and then to hex
    const [newR, newG, newB] = hslToRgb(h, newSaturation, newLightness);
    shades[shade] = rgbToHex(newR, newG, newB);
  });

  return shades;
};

export { generateShades };
