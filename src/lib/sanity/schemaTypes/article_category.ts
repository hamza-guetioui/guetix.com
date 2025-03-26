import { defineField, defineType } from "sanity";

export const articleCategory = defineType({
  name: "articleCategory",
  title: "Article Category",
  type: "document",
  fields: [
    // Category Name
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .max(20)
          .regex(
            /^[A-Za-z\s'-]+$/,
            "Only letters, spaces, apostrophes, and hyphens are allowed."
          ),
      description:
        "The name of the project category (e.g., Coding, WordPress, Collaboration).",
    }),
    // Category Title
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(5)
          .max(100)
          .regex(
            /^[A-Za-z0-9\s,'-]+$/,
            "Only letters, numbers, spaces, commas, apostrophes, and hyphens are allowed."
          ),
      description:
        "The title of the project category. It should be unique and descriptive.",
    }),
    // Category Slug
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
      description:
        "The slug is the URL-friendly version of the category name. It should be unique.",
    }),
    // Category Description
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(500)
          .regex(
            /^[A-Za-z0-9\s,.'-:!?]+$/,
            "Only letters, numbers, spaces, commas, periods, hyphens, apostrophes, colons, exclamation marks, and question marks are allowed."
          ),
      description:
        "A brief description of the project category. Keep it concise and informative.",
    }),
  
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      media: "image",
    },
  },
});
