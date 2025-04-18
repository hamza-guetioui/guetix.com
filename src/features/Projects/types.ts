export interface ColorSchema {
  background: string;
  foreground: string;
  population: number;
  title?: string;
}

type PaletteSchema = {
  dominant?: ColorSchema;
  vibrant?: ColorSchema;
  darkVibrant?: ColorSchema;
  lightVibrant?: ColorSchema;
  muted?: ColorSchema;
  darkMuted?: ColorSchema;
  lightMuted?: ColorSchema;
} | null;

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
export interface IProject {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  image: {
    alt: string;
    asset: Asset;
  };
  category: {
    _id: string;
    name: string;
    description: string;
    icon: {
      alt: string;
      asset: Asset;
    };
    color: Color | null;
  };
  technologies: Array<{
    _id: string;
    name: string;
    logo: {
      alt: string;
      asset: Asset;
    };
    isFeatured: boolean;
  }>;
  content: Array<ProjectBlock | ProjectImage | ProjectVideoEmbed>;
  links: {
    demoUrl?: string | null;
    sourceCodeUrl?: string | null;
  } | null;
  isPublished: boolean;
  isFeatured: boolean;
  sortOrder: number;
}

// ---- Optional Nested Content Types ---- //

export interface ProjectBlock {
  _type: "block";
  style: "normal" | "h2" | "h3";
  children: Array<{
    _key: string;
    _type: "span";
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _key: string;
    _type: "link";
    href: string;
  }>;
}

export interface ProjectImage {
  _type: "image";
  asset: {
    _id: string;
    url: string;
  };
  alt: string;
}

export interface ProjectVideoEmbed {
  _type: "videoEmbed";
  url: string;
  caption?: string;
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

type Color = {
  rgb: RGB;
  hsl: HSL;
  alpha: number;
  _type: "color";
  hex: string;
  hsv: HSV;
};
