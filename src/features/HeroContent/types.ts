// Color and Palette Types
export type ColorVariant =
  | "dominant"
  | "vibrant"
  | "darkVibrant"
  | "lightVibrant"
  | "muted"
  | "darkMuted"
  | "lightMuted";


export interface ColorSchema {
  background: string;
  foreground: string;
  population: number;
  title?: string;
}

export interface ImageMetadata {
  dimensions: {
    width: number;
    height: number;
    aspectRatio: number;
  };
  lqip: string;
  palette: {
    [key in ColorVariant]?: ColorSchema;
  };
}

export interface SanityImage {
  _id: string;
  url: string;
  metadata: ImageMetadata;
}

// CTA Types
export type CTAVariant = "primary" | "secondary" | "outline";

export interface CallToAction {
  text: string;
  url: string;
  variant: CTAVariant;
  icon?: string;
  isExternal?: boolean;
}

// Bio Types
export interface BioContent {
  text: string;
  highlight: string;
  highlightColor?: BrandColor;
}

// Hero Types
export interface HeroImage {
  alt: string;
  asset: SanityImage;
}

export interface HeroContent {
  title: string;
  headline: string;
  subtitle?: string;
  bio: BioContent;
  image: HeroImage;
  callToAction: CallToAction;
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

export interface IHero {
  hero: HeroContent;
}
