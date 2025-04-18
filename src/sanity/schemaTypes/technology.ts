import { defineType, defineField } from "sanity";
import { CodeIcon, PlugIcon, LinkIcon, StarIcon } from "@sanity/icons";

export const technology = defineType({
  name: "technology",
  title: "Technology",
  type: "document",
  icon: CodeIcon,
  groups: [
    { name: "general", title: "General Information", default: true },
    { name: "visual", title: "Visual Identity" },
    { name: "metadata", title: "Metadata" },
    { name: "organization", title: "Organization" },
  ],
  fields: [
    // General Information
    defineField({
      name: "name",
      title: "Technology Name",
      type: "string",
      group: "general",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(30)
          .regex(
            /^[\w\s,.!?'-()&:]*$/,
            "Only letters, numbers, spaces, and common punctuation allowed"
          ),
      description:
        "The name of the technology (e.g., React, Node.js, TypeScript)",
    }),

    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      group: "general",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: "URL-friendly version of the technology name",
    }),

    defineField({
      name: "type",
      title: "Technology Type",
      type: "string",
      group: "general",
      icon: PlugIcon,
      options: {
        list: [
          { title: "Framework", value: "framework" },
          { title: "Library", value: "library" },
          { title: "Language", value: "language" },
          { title: "Tool", value: "tool" },
          { title: "Platform", value: "platform" },
          { title: "Database", value: "database" },
          { title: "Service", value: "service" },
          { title: "Other", value: "other" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "framework",
      validation: (Rule) => Rule.required(),
      description: "The category this technology belongs to",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "general",
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(300)
          .error("Description must be between 10-300 characters"),
      description: "A brief description of the technology and its purpose",
    }),

    // Visual Identity
    defineField({
      name: "logo",
      title: "Technology Logo",
      type: "image",
      group: "visual",
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
      name: "brandColor",
      title: "Brand Color",
      type: "color",
      group: "visual",
      options: {
        disableAlpha: true,
      },
      description: "The primary brand color of this technology",
    }),

    // Metadata
    defineField({
      name: "website",
      title: "Official Website",
      type: "url",
      group: "metadata",
      icon: LinkIcon,
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }),
      description: "The official website of the technology",
    }),

    // Organization
    defineField({
      name: "isFeatured",
      title: "Featured Status",
      type: "boolean",
      group: "organization",
      icon: StarIcon,
      initialValue: false,
      description: "Highlight this technology in special sections",
    }),

    defineField({
      name: "proficiency",
      title: "Proficiency Level",
      type: "string",
      group: "organization",
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Advanced", value: "advanced" },
          { title: "Expert", value: "expert" },
        ],
        layout: "radio",
      },
      initialValue: "intermediate",
      description: "Your proficiency level with this technology",
    }),

    defineField({
      name: "sortOrder",
      title: "Display Order",
      type: "number",
      group: "organization",
      initialValue: 50,
      validation: (Rule) => Rule.min(1).max(100).integer(),
      description: "Lower numbers appear first in listings (1-100)",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "type",
      media: "logo",
      featured: "isFeatured",
      proficiency: "proficiency",
    },
    prepare({ title, subtitle, media, featured, proficiency }) {
      const status = [featured && "★", proficiency && `(${proficiency})`]
        .filter(Boolean)
        .join(" ");

      return {
        title: title ?? "Untitled Technology",
        subtitle: `${subtitle ? subtitle.charAt(0).toUpperCase() + subtitle.slice(1) : "No Type"} ${status}`,
        media: media ?? CodeIcon,
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "displayOrderAsc",
      by: [{ field: "displayOrder", direction: "asc" }],
    },
    {
      title: "Name",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
    {
      title: "Type",
      name: "typeAsc",
      by: [{ field: "type", direction: "asc" }],
    },
    {
      title: "Last Used",
      name: "lastUsedDesc",
      by: [{ field: "lastUsed", direction: "desc" }],
    },
  ],
});
