import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  groups: [
    { name: "generalInfo", title: "General Information" },
    { name: "content", title: "Content" },
    { name: "metadata", title: "Metadata" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // Article Title
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(150),
      group: "generalInfo",
      description: "The title of the article.",
    }),
    
    // Article Slug
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title", // Automatically generates the slug from the 'title'
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
      group: "generalInfo",
      description: "URL-friendly version of the title.",
    }),
    
    // Article Author
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(100),
      group: "generalInfo",
      description: "Name of the article author.",
    }),

    // Article Date
    defineField({
      name: "publishedDate",
      title: "Published Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
      group: "generalInfo",
      description: "The date when the article was published.",
    }),

    // Article Category
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "articleCategory" }, // Reference to a category document
      validation: (Rule) => Rule.required(),
      group: "generalInfo",
      description: "The category under which this article falls (e.g., Experience, Development, etc.).",
    }),

    // Article Tags
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.max(5),
      group: "generalInfo",
      description: "Tags related to the article for better categorization.",
    }),

    // Article Content
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
      group: "content",
      description: "The main body content of the article.",
    }),

    // Featured Image
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      group: "content",
      description: "An image representing the article (e.g., for blog preview).",
    }),

    // Article Excerpt
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule) => Rule.required().min(10).max(250),
      group: "content",
      description: "A brief summary or excerpt of the article.",
    }),

    // SEO Title
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      validation: (Rule) => Rule.max(60),
      group: "seo",
      description: "SEO-friendly title for the article.",
    }),

    // SEO Description
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      validation: (Rule) => Rule.max(160),
      group: "seo",
      description: "SEO-friendly description for the article.",
    }),

    // SEO Keywords
    defineField({
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.max(10),
      group: "seo",
      description: "Relevant keywords for SEO purposes.",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "excerpt",
      media: "featuredImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Untitled Article",
        subtitle: subtitle || "No excerpt available",
        media,
      };
    },
  },
});
