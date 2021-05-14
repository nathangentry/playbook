import { Color, ColorPalette } from "./Color";
import { DefaultTheme } from "react-jss";

export interface TypographyProps {
  fontFamily: string,
  fontSize: number | string,
  lineHeight?: number | string,
  fontWeight?: number | string,
  textTransform?: string,
  letterSpacing?: string,
  margin?: number,
}

const textColors = {
  light: {
    primary: new Color("#FFFFFF", 0.9),
    secondary: new Color("#FFFFFF", 0.75),
  },
  dark: {
    primary: new Color("#000000", 0.9),
    secondary: new Color("#000000", 0.75),
  },
}

export interface AppTheme extends DefaultTheme {
  colors: ColorPalette,
  typography: {
    [style: string]: TypographyProps
  }
}

export const theme: AppTheme = {
  colors: {
    ui: [
      {
        base: new Color("#191919"),
        text: textColors.light,
      },
      {
        base: new Color("#000000", 0.5),
        text: textColors.light,
      },
      {
        base: new Color("#000000"),
        text: textColors.light,
      }
    ],
    success: {
      base: new Color(""),
      text: textColors.light,
    },
    warning: {
      base: new Color(""),
      text: textColors.light,
    },
    error: {
      base: new Color(""),
      text: textColors.light,
    },
    primary: {
      base: new Color("#E28413"),
      active: new Color("#F2A447"),
      text: textColors.light,
    },
    secondary: {
      base: new Color("#757575"),
      active: new Color("#706F6F"),
      text: textColors.light,
    },
  },
  typography: {
    title: {
      fontFamily: "Bebas Neue",
      fontSize: "2.67em",
      fontWeight: "normal",
      margin: 0,
    },
    heading: {
      fontFamily: "Bebas Neue",
      fontSize: "2em",
      fontWeight: "normal",
      margin: 0,
    },
    subheading: {
      fontFamily: "Bebas Neue",
      fontSize: "1.5em",
      fontWeight: "normal",
      margin: 0,
    },
    large: {
      fontFamily: "Hind",
      fontSize: "1.17em",
      fontWeight: 400,
      letterSpacing: "-0.01em",
      margin: 0,
    },
    body: {
      fontFamily: "Hind",
      fontSize: "1em",
      lineHeight: "1.33em",
      fontWeight: 400,
      margin: 0,
    },
    small: {
      fontFamily: "Hind",
      fontSize: "0.78em",
      fontWeight: 400,
      margin: 0,
    },
    preTitle: {
      fontFamily: "Hind",
      fontSize: "0.78em",
      fontWeight: 400,
      letterSpacing: "0.25em",
      textTransform: "uppercase",
      margin: 0,
    },
    button: {
      fontFamily: "Hind",
      fontSize: "0.78em",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      margin: 0,
    },
  }
}