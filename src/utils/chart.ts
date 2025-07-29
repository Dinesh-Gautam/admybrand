export const formatValue = (value: number): string =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 3,
    notation: "compact",
  }).format(value);

export const formatThousands = (value: number): string =>
  Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
    notation: "compact",
  }).format(value);

export const getCssVariable = (variable: string): string => {
  if (typeof window === "undefined") return "";

  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
};

const adjustHexOpacity = (hexColor: string, opacity: number): string => {
  // Remove the '#' if it exists
  hexColor = hexColor.replace("#", "");

  // Convert hex to RGB
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Return RGBA string
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const adjustHSLOpacity = (hslColor: string, opacity: number): string => {
  // Convert HSL to HSLA
  return hslColor.replace("hsl(", "hsla(").replace(")", `, ${opacity})`);
};

const adjustOKLCHOpacity = (oklchColor: string, opacity: number): string => {
  // Add alpha value to OKLCH color
  return oklchColor.replace(
    /oklch\((.*?)\)/,
    (match, p1) => `oklch(${p1} / ${opacity})`
  );
};

const adjustRGBOpacity = (rgbColor: string, opacity: number): string => {
  // Check if it's an rgba color
  if (rgbColor.startsWith("rgba")) {
    // Replace the existing alpha value
    return rgbColor.replace(/, ?\d?\.?\d+\)$/, `, ${opacity})`);
  } else {
    // It's an rgb color, so add the alpha value
    return rgbColor.replace("rgb(", "rgba(").replace(")", `, ${opacity})`);
  }
};

export const adjustColorOpacity = (color: string, opacity: number): string => {
  if (!color) return "";
  if (color.startsWith("#")) {
    return adjustHexOpacity(color, opacity);
  } else if (color.startsWith("hsl")) {
    return adjustHSLOpacity(color, opacity);
  } else if (color.startsWith("oklch")) {
    return adjustOKLCHOpacity(color, opacity);
  } else if (color.startsWith("rgb")) {
    return adjustRGBOpacity(color, opacity);
  } else {
    throw new Error(`Unsupported color format: ${color}`);
  }
};

export const oklchToRGBA = (oklchColor: string): string => {
  if (typeof window === "undefined") return "";
  // Create a temporary div to use for color conversion
  const tempDiv = document.createElement("div");
  tempDiv.style.color = oklchColor;
  document.body.appendChild(tempDiv);

  // Get the computed style and convert to RGB
  const computedColor = window.getComputedStyle(tempDiv).color;
  document.body.removeChild(tempDiv);

  return computedColor;
};
