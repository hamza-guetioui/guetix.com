import { defineField, defineType } from "sanity";

export const projectCategory = defineType({
  name: "projectCategory",
  title: "Project Category",
  type: "document",
  fields: [
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
      title: "title",
      icon: "icon",
      colorHex: "color.hex",
    },
  },
});
