import { type FontSizeScale } from './typography';

export type Styles = Object;

export type Colors = {
  primary?: string,
  secondary?: string,
  success?: string,
  warning?: string,
  danger?: string,
  black?: string,
  white?: string,
};

export type Color = $Keys<Colors> | string;

export type Renderer = {
  renderRule: Styles => string,
};

export type TypographySetup = {|
  baseFontSize: number,
  fontSizeScale: FontSizeScale,
  lineHeight: number,
|};

export type UserTheme = {
  typographySetup?: TypographySetup,
  colors?: Colors,
};

export type Typography = {
  baseFontSize: string,
  fontSize: number => string,
  lineHeight: number,
  rhythm: number => string,
};

export type Theme = {
  typography: Typography,
} & UserTheme;

export type Bold = 'normal' | 'bold' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
