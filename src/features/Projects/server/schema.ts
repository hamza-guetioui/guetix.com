import { TechnologySchema } from '@/features/Technologies/server/schema';
import { z } from 'zod';

// ColorSchema for palette
export const ColorSchema = z.object({
  background: z.string(),
  foreground: z.string(),
  population: z.number(),
  title: z.string().optional(),
});

// Asset Metadata
export const AssetMetadataSchema = z.object({
  dimensions: z.object({
    width: z.number(),
    height: z.number(),
  }),
  lqip: z.string(),
  // palette: z.object({
  //   dominant: ColorSchema.optional(),
  //   vibrant: ColorSchema.optional(),
  //   darkVibrant: ColorSchema.optional(),
  //   lightVibrant: ColorSchema.optional(),
  //   muted: ColorSchema.optional(),
  //   darkMuted: ColorSchema.optional(),
  //   lightMuted: ColorSchema.optional(),
  // }),
});

// Asset schema
export const AssetSchema = z.object({
  _id: z.string(),
  url: z.string(),
  metadata: AssetMetadataSchema,
});



// ProjectBlock
export const ProjectBlockSchema = z.object({
  _type: z.literal('block'),
  style: z.enum(['normal', 'h2', 'h3']),
  children: z.array(
    z.object({
      _key: z.string(),
      _type: z.literal('span'),
      text: z.string(),
      marks: z.array(z.string()).optional(),
    })
  ),
  markDefs: z.array(
    z.object({
      _key: z.string(),
      _type: z.literal('link'),
      href: z.string(),
    })
  ).optional(),
});

// ProjectImage
export const ProjectImageSchema = z.object({
  _type: z.literal('image'),
  asset: z.object({
    _id: z.string(),
    url: z.string(),
  }),
  alt: z.string(),
});

// ProjectVideoEmbed
export const ProjectVideoEmbedSchema = z.object({
  _type: z.literal('videoEmbed'),
  url: z.string(),
  caption: z.string().optional(),
});

// ProjectSchema
export const ProjectSchema = z.object({
  _id: z.string(),
  title: z.string(),
  slug: z.object({
    current: z.string(),
  }),
  description: z.string(),
  image: z.object({
    alt: z.string(),
    asset: AssetSchema,
  }),
  category: z.object({
    _id: z.string(),
    title: z.string(),
  }),
  technologies: z.array(TechnologySchema),
  content: z.array(
    z.union([
      ProjectBlockSchema,
      ProjectImageSchema,
      ProjectVideoEmbedSchema,
    ])
  ),
  externalLinks: z.object({
    liveUrl: z.string().optional().nullable(),
    repository: z.string().optional().nullable(),
  }),
  isPublished: z.boolean(),
  isFeatured: z.boolean(),
  sortOrder: z.number(),
});
