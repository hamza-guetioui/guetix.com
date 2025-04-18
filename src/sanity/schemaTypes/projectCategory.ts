import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const projectCategory = defineType({
  name: "projectCategory",
  title: "Project Category",
  type: "document",
  icon: TagIcon,
  groups: [
    { name: "general", title: "General", default: true },
    { name: "appearance", title: "Appearance" },
    { name: "organization", title: "Organization" },
  ],
  fields: [
    // Basic Information
    defineField({
      name: "name",
      title: "Category Name",
      type: "string",
      group: "general",
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .max(50)
          .regex(
            /^[A-Za-z0-9\s,'-]+$/,
            "Only letters, numbers, spaces, commas, apostrophes, and hyphens are allowed."
          ),
      description:
        "The name of the project category (e.g., 'Web Development', 'Mobile Apps')",
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
      description: "The URL-friendly version of the category name",
    }),

    defineField({
      name: "description",
      title: "Category Description",
      type: "text",
      group: "general",
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(200)
          .regex(
            /^[A-Za-z0-9\s',:!?.-]+$/,
            "Only letters, numbers, spaces, commas, apostrophes, colons, exclamation marks, and question marks are allowed."
          ),
      description:
        "A brief description of what projects belong in this category",
    }),

    // Visual Appearance
    defineField({
      name: "icon",
      title: "Category Icon",
      type: "image",
      group: "appearance",
      description: "Icon name from your icon library",
      options: {
        metadata: ["lqip", "palette"],
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: "color",
      title: "Category Color",
      type: "color",
      group: "appearance",
      options: {
        disableAlpha: true,
      },
      description: "Primary color for this category",
    }),

    // Organization
    defineField({
      name: "displayOrder",
      title: "Display Order",
      type: "number",
      group: "organization",
      initialValue: 100,
      validation: (Rule) => Rule.min(0).max(1000),
      description: "Lower numbers appear first in category listings",
    }),

    defineField({
      name: "isActive",
      title: "Active Status",
      type: "boolean",
      group: "organization",
      initialValue: true,
      description: "Whether this category should be visible on the site",
    }),

    defineField({
      name: "parentCategory",
      title: "Parent Category",
      type: "reference",
      group: "organization",
      to: [{ type: "projectCategory" }],
      description: "Optional parent category for hierarchical organization",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      media: "icon",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title ?? "Untitled Category",
        subtitle: subtitle ?? "No description",
        media: media ?? TagIcon,
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
  ],
});
