export interface ColorSchema {
  background: string;
  foreground: string;
  population: number;
  title?: string;
}

export interface ITechnology {
  _id: string;
  name: string;
  type: string;
  description: string;
  logo: {
    alt: string;
    asset: {
      _id: string;
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
        };
        lqip: string;
        palette: {
          dominant?: ColorSchema;
          vibrant?: ColorSchema;
          darkVibrant?: ColorSchema;
          lightVibrant?: ColorSchema;
          muted?: ColorSchema;
          darkMuted?: ColorSchema;
          lightMuted?: ColorSchema;
        };
      };
    };
  };
  website: string;
  isFeatured: boolean;
}
