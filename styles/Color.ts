export class Color {
  hex: string;
  rgba: { r: number, g: number, b: number, a: number };

  constructor(hex: string, alpha?: number) {
    this.hex = hex.charAt(0) === "#" ? hex : `#${hex}`;
    this.rgba = Color.convertHexToRgba(this.hex, alpha ?? 1.0);
  }

  static convertHexToRgba(hex: string, alpha: number) {
    return {
      r: parseInt(hex.substring(1, 3), 16),
      g: parseInt(hex.substring(3, 5), 16),
      b: parseInt(hex.substring(5, 7), 16),
      a: alpha,
    };
  }

  opacity(alpha: number) {
    return `rgba(${this.rgba.r}, ${this.rgba.g}, ${this.rgba.b}, ${alpha})`;
  }

  toString() {
    return this.rgba.a === 1.0 ? this.hex : this.opacity(this.rgba.a);
  }
}

export interface ColorSwatch {
  base: Color,
  active?: Color,
  text: {
    primary: Color,
    secondary?: Color,
  },
}

export interface ColorPalette {
  ui: ColorSwatch[],
  success: ColorSwatch,
  warning: ColorSwatch,
  error: ColorSwatch,
  primary: ColorSwatch,
  secondary: ColorSwatch,
}