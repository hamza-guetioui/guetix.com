import { z } from "zod";

// ColorSchema for palette
export const ColorSchema = z.object({
  background: z.string(),
  foreground: z.string(),
  population: z.number(),
  title: z.string().optional(),
});

// SocialSchema definition
export const SocialSchema = z.object({
  _id: z.string(),
  platform: z.string(),
  username: z.string(),
  profileUrl: z.string(),
  icon: z.object({
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
  color:  z.object({
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
  isActive: z.boolean(),
  isFeatured: z.boolean(),
  sortOrder: z.number(),
});
