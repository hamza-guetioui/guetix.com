import { z } from "zod";

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
  slug: z.object({
    current: z.string(),
  }),
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
  brandColor: z.object({
    rgb: z.object({
      r: z.number(),
      g: z.number(),
      b: z.number(),
    }),
    hsl: z.object({
      h: z.number(),
      s: z.number(),
      l: z.number(),
    }),
    alpha: z.number(),
    _type: z.literal("color"),
    hex: z.string(),
    hsv: z.object({
      h: z.number(),
      s: z.number(),
      v: z.number(),
    }),
  }),
  website: z.string(),
  isFeatured: z.boolean(),
  proficiency: z.enum(["beginner", "intermediate", "advanced", "expert"]),
  sortOrder: z.number(),
});
