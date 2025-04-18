import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentIcon, TagIcon, ImageIcon, StarIcon } from "@sanity/icons";

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  icon: DocumentIcon,
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
      icon: DocumentIcon,
    },
    {
      name: "metadata",
      title: "Metadata",
      icon: TagIcon,
    },
    {
      name: "media",
      title: "Media",
      icon: ImageIcon,
    },
    {
      name: "seo",
      title: "SEO",
      icon: StarIcon,
    },
  ],
  fields: [
    // Content
    defineField({
      name: "title",
      type: "string",
      title: "Article Title",
      group: "content",
      validation: (Rule) =>
        Rule.required()
          .min(5)
          .max(100)
          .regex(/^[\w\s,.!?'-()&:]*$/, {
            name: "Allowed characters",
            invert: false,
          }),
      description: "The main title of your article",
    }),

    defineField({
      name: "slug",
      type: "slug",
      title: "URL Slug",
      group: "content",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: "The URL-friendly version of the title",
    }),

    defineField({
      name: "excerpt",
      type: "text",
      title: "Excerpt",
      group: "content",
      validation: (Rule) => Rule.required().min(50).max(200),
      description: "A short summary of the article",
    }),

    defineField({
      name: "content",
      type: "blockContent",
      title: "Project Content",
      group: "content",
      validation: (Rule) => Rule.required().min(1),
    }),

    // Metadata
    defineField({
      name: "category",
      type: "reference",
      title: "Category",
      group: "metadata",
      to: [{ type: "articleCategory" }],
      validation: (Rule) => Rule.required(),
      description: "The main category of the article",
    }),

    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      group: "metadata",
      of: [
        {
          type: "reference",
          to: [{ type: "articleTag" }],
        },
      ],
      validation: (Rule) => Rule.max(10).unique(),
      description: "Tags related to the article",
    }),

    defineField({
      name: "author",
      type: "string",
      title: "Author",
      group: "metadata",
      description: "The author of the article",
      validation: (Rule) => Rule.required(),
      initialValue: async (_, context) => {
        const currentUserName = context?.currentUser?.name;
        return currentUserName ?? "";
      },
    }),

    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
      group: "metadata",
      validation: (Rule) => Rule.required(),
      description: "When the article was published",
    }),

    defineField({
      name: "readingTime",
      type: "number",
      title: "Reading Time (minutes)",
      group: "metadata",
      validation: (Rule) => Rule.required().min(1).max(60),
      description: "Estimated reading time in minutes",
    }),

    // Media
    defineField({
      name: "coverImage",
      type: "image",
      title: "Cover Image",
      group: "media",
      options: {
        hotspot: true,
        metadata: ["lqip", "palette"],
      },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt Text",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "caption",
          type: "string",
          title: "Caption",
        }),
      ],
    }),

    defineField({
      name: "gallery",
      type: "array",
      title: "Image Gallery",
      group: "media",
      of: [
        defineArrayMember({
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alt Text",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "caption",
              type: "string",
              title: "Caption",
            }),
          ],
        }),
      ],
    }),

    // SEO
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "object",
      group: "seo",
      fields: [
        defineField({
          name: "metaTitle",
          type: "string",
          title: "Meta Title",
          validation: (Rule) => Rule.max(60),
          description: "Title for search engines (max 60 characters)",
        }),
        defineField({
          name: "metaDescription",
          type: "text",
          title: "Meta Description",
          validation: (Rule) => Rule.max(160),
          description: "Description for search engines (max 160 characters)",
        }),
        defineField({
          name: "ogImage",
          type: "image",
          title: "Open Graph Image",
          description: "Image for social media sharing",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "excerpt",
      media: "coverImage",
      status: "status",
      publishedAt: "publishedAt",
    },
    prepare({ title, media, publishedAt }) {
      return {
        title: title ?? "Untitled Article",
        subtitle: ` ${publishedAt ? new Date(publishedAt).toLocaleDateString() : "Not published"}`,
        media: media ?? DocumentIcon,
      };
    },
  },

  orderings: [
    {
      title: "Publication Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Publication Date, Old",
      name: "publishedAtAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
    {
      title: "Title",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});
