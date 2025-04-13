import { ITechnology } from "../Technologies/types";
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
export interface IProject {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
    description: string;
    image: {
      alt: string;
      asset: Asset
    };
    category: {
      _id: string;
      title: string;
    };
    technologies: ITechnology[];
    content: Array<ProjectBlock | ProjectImage | ProjectVideoEmbed>;
    externalLinks: {
      liveUrl?: string;
      repository?: string;
    };
    isPublished: boolean;
    isFeatured: boolean;
    sortOrder: number;
  }
  
  // ---- Optional Nested Content Types ---- //
  
  export interface ProjectBlock {
    _type: 'block';
    style: 'normal' | 'h2' | 'h3';
    children: Array<{
      _key: string;
      _type: 'span';
      text: string;
      marks?: string[];
    }>;
    markDefs?: Array<{
      _key: string;
      _type: 'link';
      href: string;
    }>;
  }
  
  export interface ProjectImage {
    _type: 'image';
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  }
  
  export interface ProjectVideoEmbed {
    _type: 'videoEmbed';
    url: string;
    caption?: string;
  }
  