import { defineField, defineType } from "sanity";
import { SearchIcon } from "@sanity/icons";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  icon: SearchIcon,
  fields: [
    defineField({
      name: "title",
      title: "SEO Title",
      type: "string",
      description: "Title for search engines and browsers",
      validation: (Rule) =>
        Rule.max(60).warning("Should be under 60 characters"),
    }),
    defineField({
      name: "description",
      title: "SEO Description",
      type: "text",
      rows: 3,
      description: "Description for search engines",
      validation: (Rule) =>
        Rule.max(160).warning("Should be under 160 characters"),
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      description: "Keywords for search engines",
    }),
    defineField({
      name: "image",
      title: "SEO Image",
      type: "image",
      description: "Image for social sharing",
      options: {
        hotspot: true,
      },
    }),
  ],
});
