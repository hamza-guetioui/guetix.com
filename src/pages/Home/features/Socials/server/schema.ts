import { z } from "zod";

const ColorSchema = z.object({
  background: z.string(),
  foreground: z.string(),
  population: z.number(),
  title: z.string().optional(),
});

export const HeroSchema = z.object({
  title: z.string(),
  headline: z.string(),
  bio: z.object({
    text: z.string(),
    highlight: z.string(),
  }),
  picture: z.object({
    alt: z.string(),
    asset: z.object({
      _id: z.string(),
      url: z.string().url(),
      metadata: z.object({
        dimensions: z.object({
          width: z.number(),
          height: z.number(),
        }),
        lqip: z.string(),
        palette: z.object({
          dominant: ColorSchema.optional(),
          vibrant: ColorSchema.optional(),
          darkVibrant: ColorSchema.optional(),
          lightVibrant: ColorSchema.optional(),
          muted: ColorSchema.optional(),
          darkMuted: ColorSchema.optional(),
          lightMuted: ColorSchema.optional(),
        }),
      }),
    }),
  }),
});
