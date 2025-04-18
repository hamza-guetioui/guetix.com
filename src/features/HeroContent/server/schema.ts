import { z } from "zod";

const ColorSchema = z.object({
  background: z.string(),
  foreground: z.string(),
  population: z.number(),
  title: z.string().optional(),
});

const HeroObjectSchema = z.object({
  title: z.string(),
  headline: z.string(),
  bio: z.object({
    text: z.string(),
    highlight: z.string(),
    highlightColor: z.object({
      rgb: z.object({
        r: z.number(),
        g: z.number(),
        b: z.number()
      }),
      hsl: z.object({
        h: z.number(),
        s: z.number(),
        l: z.number()
      }),
      alpha: z.number(),
      _type: z.literal('color'),
      hex: z.string(),
      hsv: z.object({
        h: z.number(),
        s: z.number(),
        v: z.number()
      })
    }),
  }),
  image: z.object({
    alt: z.string(),
    asset: z.object({
      _id: z.string(),
      url: z.string().url(),
      metadata: z.object({
        dimensions: z.object({
          width: z.number(),
          height: z.number(),
          aspectRatio: z.number(),
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
  callToAction: z.object({
    text: z.string(),
    url: z.string().url(),
    variant: z.enum(["primary", "secondary", "outline"]),
  }),
});

// This is the final schema to match the full response object
export const HeroSchema = z.object({
  hero: HeroObjectSchema,
});
