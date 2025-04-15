export interface ColorSchema {
  background: string;
  foreground: string;
  population: number;
  title?: string;
}

export interface IHero {
  hero: {
    title: string;
    headline: string;
    bio: {
      text: string;
      highlight: string;
    };
    image: {
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
  };
}
