export interface ColorSchema {
  background: string;
  foreground: string;
  population: number;
  title?: string;
}

export interface PaletteSchema {
  dominant?: ColorSchema;
  vibrant?: ColorSchema;
  darkVibrant?: ColorSchema;
  lightVibrant?: ColorSchema;
  muted?: ColorSchema;
  darkMuted?: ColorSchema;
  lightMuted?: ColorSchema;
}

export interface Dimensions {
  width: number;
  height: number;
}

export interface AssetMetadata {
  dimensions: Dimensions;
  lqip: string;
  palette: PaletteSchema;
}

export interface Asset {
  _id: string;
  url: string;
  metadata: AssetMetadata;
}

export interface Logo {
  alt: string;
  asset: Asset;
}

export interface ITechnology {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  type: string;
  description: string;
  logo: Logo;
  brandColor: BrandColor;
  website: string;
  isFeatured: boolean;
  proficiency: "beginner" | "intermediate" | "advanced" | "expert";
  sortOrder: number;
}


interface RGB {
  r: number;
  g: number;
  b: number;
}

interface HSL {
  h: number;
  s: number;
  l: number;
}

interface HSV {
  h: number;
  s: number;
  v: number;
}

interface BrandColor {
  rgb: RGB;
  hsl: HSL;
  alpha: number;
  _type: 'color';
  hex: string;
  hsv: HSV;
}