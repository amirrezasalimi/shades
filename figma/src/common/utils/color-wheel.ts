import chroma from "chroma-js";

export type HarmonyType =
  | "complementary"
  | "split-complementary"
  | "monochromatic"
  | "triadic"
  | "square"
  | "analogous";

/**
 * Rotates the hue of a color by a specified number of degrees
 * @param color - The base color to rotate (any valid CSS color)
 * @param degrees - The number of degrees to rotate the hue
 * @returns The new color as a hex string
 */
export function rotateHue(color: string, degrees: number): string {
  try {
    const hsl = chroma(color).hsl();
    let h = hsl[0] || 0; // Handle undefined hue (for grayscale colors)
    h = (h + degrees) % 360;
    if (h < 0) h += 360;
    return chroma.hsl(h, hsl[1], hsl[2]).hex();
  } catch (error) {
    console.error("Error rotating hue:", error);
    return color; // Return original color if there's an error
  }
}

/**
 * Generates a color harmony based on a base color and harmony type
 * @param baseColor - The base color to generate harmony from (any valid CSS color)
 * @param harmonyType - The type of color harmony to generate
 * @returns An array of colors in the harmony as hex strings
 */
export function generateColorHarmony(
  baseColor: string,
  harmonyType: HarmonyType
): string[] {
  try {
    const baseChroma = chroma(baseColor);
    const baseHex = baseChroma.hex(); // Normalize to hex format

    switch (harmonyType) {
      case "complementary": {
        // Base color and its opposite on the color wheel (180° apart)
        return [baseHex, rotateHue(baseHex, 180)];
      }

      case "split-complementary": {
        // Base color and two colors adjacent to its complement (150° and 210° from base)
        return [baseHex, rotateHue(baseHex, 150), rotateHue(baseHex, 210)];
      }

      case "monochromatic": {
        // Different shades and tints of the same color using LAB color space
        // for more perceptually uniform brightness steps
        const lab = baseChroma.lab();
        return [
          chroma.lab(Math.min(lab[0] + 25, 100), lab[1], lab[2]).hex(), // Lightest
          chroma.lab(Math.min(lab[0] + 12.5, 95), lab[1], lab[2]).hex(), // Lighter
          baseHex, // Base
          chroma.lab(Math.max(lab[0] - 12.5, 5), lab[1], lab[2]).hex(), // Darker
          chroma.lab(Math.max(lab[0] - 25, 0), lab[1], lab[2]).hex(), // Darkest
        ];
      }

      case "triadic": {
        // Three colors equally spaced around the color wheel (120° apart)
        return [baseHex, rotateHue(baseHex, 120), rotateHue(baseHex, 240)];
      }

      case "square": {
        // Four colors equally spaced around the color wheel (90° apart)
        return [
          baseHex,
          rotateHue(baseHex, 90),
          rotateHue(baseHex, 180),
          rotateHue(baseHex, 270),
        ];
      }

      case "analogous": {
        // Colors adjacent to each other on the color wheel
        // Using HCL color space for more perceptually uniform hue steps
        const hcl = baseChroma.hcl();
        return [
          chroma.hcl(hcl[0] - 60, hcl[1], hcl[2]).hex(), // -60°
          chroma.hcl(hcl[0] - 30, hcl[1], hcl[2]).hex(), // -30°
          baseHex, // Base
          chroma.hcl(hcl[0] + 30, hcl[1], hcl[2]).hex(), // +30°
          chroma.hcl(hcl[0] + 60, hcl[1], hcl[2]).hex(), // +60°
        ];
      }

      default: {
        // Return just the base color if an unknown harmony type is provided
        return [baseHex];
      }
    }
  } catch (error) {
    console.error("Error generating color harmony:", error);
    // Return an array with just the original color if there's an error
    return [baseColor];
  }
}

/**
 * Generates points for visualizing a color harmony on a color wheel
 * @param baseColor - The base color for the harmony
 * @param harmonyType - The type of color harmony
 * @param radius - The radius of the color wheel
 * @param centerX - The x-coordinate of the wheel center
 * @param centerY - The y-coordinate of the wheel center
 * @returns An array of points with x, y coordinates and colors
 */
export function generateColorWheelPoints(
  baseColor: string,
  harmonyType: HarmonyType,
  radius: number = 100,
  centerX: number = 150,
  centerY: number = 150
): Array<{ x: number; y: number; color: string }> {
  try {
    const points: Array<{ x: number; y: number; color: string }> = [];
    const colors = generateColorHarmony(baseColor, harmonyType);

    // Add points for each color in the harmony
    colors.forEach((color) => {
      const hue = chroma(color).hsl()[0] || 0;
      points.push({
        x: centerX + radius * Math.cos(((hue - 90) * Math.PI) / 180),
        y: centerY + radius * Math.sin(((hue - 90) * Math.PI) / 180),
        color: color,
      });
    });

    return points;
  } catch (error) {
    console.error("Error generating color wheel points:", error);
    // Return a single point at the center with the base color if there's an error
    return [
      {
        x: centerX,
        y: centerY,
        color: baseColor,
      },
    ];
  }
}

/**
 * Checks if a color is valid
 * @param color - The color to validate
 * @returns True if the color is valid, false otherwise
 */
export function isValidColor(color: string): boolean {
  try {
    chroma(color);
    return true;
  } catch {
    return false;
  }
}

/**
 * Generates a random vibrant color
 * @returns A random color as a hex string
 */
export function generateRandomColor(): string {
  const randomHue = Math.floor(Math.random() * 360);
  const randomSaturation = 0.7 + Math.random() * 0.3; // 0.7-1.0 for vibrant colors
  const randomLightness = 0.4 + Math.random() * 0.2; // 0.4-0.6 for medium brightness
  return chroma.hsl(randomHue, randomSaturation, randomLightness).hex();
}

/**
 * Gets detailed information about a color
 * @param color - The color to get information about
 * @returns An object with color information
 */
export function getColorInfo(color: string) {
  try {
    const chromaColor = chroma(color);
    return {
      hex: chromaColor.hex(),
      rgb: chromaColor.rgb().map(Math.round),
      hsl: chromaColor
        .hsl()
        .map((v, i) => (i === 0 ? Math.round(v) : Math.round(v * 100) + "%")),
      temperature: Math.round(chromaColor.temperature()),
      luminance: Math.round(chromaColor.luminance() * 100) + "%",
      name: getColorName(color),
    };
  } catch (error) {
    console.error("Error getting color info:", error);
    return {
      hex: color,
      rgb: [0, 0, 0],
      hsl: [0, "0%", "0%"],
      temperature: 0,
      luminance: "0%",
      name: "Invalid color",
    };
  }
}

/**
 * Gets an approximate name for a color
 * @param color - The color to name
 * @returns A string with the color name
 */
function getColorName(color: string): string {
  try {
    const hsl = chroma(color).hsl();
    const h = hsl[0] || 0;
    const s = hsl[1];
    const l = hsl[2];

    // For grayscale colors
    if (s < 0.15) {
      if (l < 0.15) return "Black";
      if (l < 0.3) return "Dark Gray";
      if (l < 0.7) return "Gray";
      if (l < 0.85) return "Light Gray";
      return "White";
    }

    // For chromatic colors
    let name = "";

    // Lightness modifier
    if (l < 0.2) name = "Very Dark ";
    else if (l < 0.4) name = "Dark ";
    else if (l > 0.8) name = "Very Light ";
    else if (l > 0.6) name = "Light ";

    // Saturation modifier
    if (s < 0.4 && name === "") name = "Grayish ";
    else if (s > 0.8 && l > 0.3 && l < 0.7) name = "Vivid ";

    // Hue name
    if (h >= 0 && h < 15) name += "Red";
    else if (h >= 15 && h < 45) name += "Orange";
    else if (h >= 45 && h < 65) name += "Yellow";
    else if (h >= 65 && h < 80) name += "Lime";
    else if (h >= 80 && h < 170) name += "Green";
    else if (h >= 170 && h < 200) name += "Cyan";
    else if (h >= 200 && h < 240) name += "Blue";
    else if (h >= 240 && h < 280) name += "Indigo";
    else if (h >= 280 && h < 320) name += "Purple";
    else if (h >= 320 && h < 335) name += "Magenta";
    else name += "Red";

    return name;
  } catch (error) {
    return "Unknown";
  }
}
