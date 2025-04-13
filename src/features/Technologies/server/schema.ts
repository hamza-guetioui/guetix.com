import { z } from 'zod';

// ColorSchema for palette
export const ColorSchema = z.object({
  background: z.string(),
  foreground: z.string(),
  population: z.number(),
  title: z.string().optional(),
});

// TechnologySchema definition
export const TechnologySchema = z.object({
  _id: z.string(),
  name: z.string(),
  type: z.string(),
  description: z.string(),
  logo: z.object({
    alt: z.string(),
    asset: z.object({
      _id: z.string(),
      url: z.string(),
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
  website: z.string(),
  isFeatured: z.boolean(),
});

