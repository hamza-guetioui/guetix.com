// src/lib/sanity/schemaTypes/videoTag.ts
import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const videoTag = defineType({
  name: "videoTag",
  title: "Video Tag",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Tag Name",
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(30)
          .regex(/^[A-Za-z0-9\s-]+$/),
      description: "The name of the tag"
    }),

    defineField({
      name: "slug",
      type: "slug",
      title: "URL Slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule) => 
        Rule.required()
          .min(10)
          .max(200)
    }),

  ]
});

