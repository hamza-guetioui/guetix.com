export interface ColorSchema {
  background: string;
  foreground: string;
  population: number;
  title?: string;
}

export interface IHero {
  title: string;
  headline: string;
  bio: {
    text: string;
    highlight: string;
  };
  picture: {
    alt: string;
    asset: {
      _id: string;
      url: string;
      metadata: {
        dimensions : {
          width : number;
          height: number;
        },
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
}