import { defineType, defineField } from "sanity";
import { CodeIcon, PlugIcon, LinkIcon } from "@sanity/icons";

export const technology = defineType({
  name: "technology", 
  title: "Technology",
  type: "document",
  icon: CodeIcon,
  fields: [
    defineField({
      name: "name",
      title: "Technology Name",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(20)
          .regex(
            /^[\w\s,.!?'-()&:]*$/,
            "Only letters, numbers, spaces, and hyphens allowed"
          ),
    }),

    defineField({
      name: "type",
      title: "Type",
      type: "string",
      icon: PlugIcon,
      options: {
        list: [         
          { title: "Technology", value: "technology" },
          { title: "Plugin", value: "plugin" },
          { title: "Language", value: "language" },
          { title: "Other", value: "other" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "technology",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      validation: (Rule) => Rule.required().min(1).max(300),
    }),
    defineField({
      name: "logo",
      title: "Technology Logo",
      type: "image",
      options: {
        hotspot: true,
        metadata: ["lqip", "palette"],
      },
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) =>
            Rule.required()
              .min(1)
              .max(50)
              .regex(/^[\w\s-.]+$/),
        }),
      ],
    }),
    defineField({
      name: "website",
      title: "Official Website",
      type: "url",
      icon: LinkIcon,
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ["http", "https", "mailto", "tel"],
          allowRelative: false,
        }),
    }),
    defineField({
      name: "isFeatured",
      title: "Is featured",
      type: "boolean",
      description: "If this tech should be displayed first or highlighted",
      initialValue: false, // default value is false
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "type",
      media: "logo",
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.subtitle
          ? `${selection.subtitle.charAt(0).toUpperCase()}${selection.subtitle.slice(1)}`
          : "No category",
        media: selection.media,
      };
    },
  },
  orderings: [
    {
      title: "Name",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
    {
      title: "Category",
      name: "categoryAsc",
      by: [{ field: "category", direction: "asc" }],
    },
  ],
});
