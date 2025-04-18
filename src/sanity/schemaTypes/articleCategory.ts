import { defineField, defineType } from "sanity";
import { 
  TagIcon, 
  BookIcon, 
  StarIcon,
} from "@sanity/icons";

export const articleCategory = defineType({
  name: "articleCategory",
  title: "Article Category",
  type: "document",
  icon: TagIcon,
  groups: [
    {
      name: "general",
      title: "General Information",
      default: true,
      icon: BookIcon,
    },
    {
      name: "appearance",
      title: "Appearance",
    },
    {
      name: "organization",
      title: "Organization",
      icon: StarIcon,
    }
  ],
  fields: [
    // General Information
    defineField({
      name: "name",
      type: "string",
      title: "Category Name",
      group: "general",
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(50)
          .regex(/^[A-Za-z0-9\s,'-]+$/, {
            name: "Allowed characters",
            invert: false,
          }),
      description: "The name of the category (e.g., 'Web Development', 'Career Advice')"
    }),

    defineField({
      name: "slug",
      type: "slug",
      title: "URL Slug",
      group: "general",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: "The URL-friendly version of the category name"
    }),

    defineField({
      name: "description",
      type: "text",
      title: "Category Description",
      group: "general",
      validation: (Rule) => 
        Rule.required()
          .min(10)
          .max(200)
          .error("Description must be between 10-200 characters"),
      description: "A brief description of what articles belong in this category"
    }),

    // Appearance

    defineField({
      name: "color",
      type: "color",
      title: "Category Color",
      group: "appearance",
      options: {
        disableAlpha: true,
      },
      validation: (Rule) => Rule.required(),
      description: "Primary color for this category"
    }),

    // Organization
    defineField({
      name: "displayOrder",
      type: "number",
      title: "Display Order",
      group: "organization",
      initialValue: 50,
      validation: (Rule) => Rule.min(1).max(100).integer(),
      description: "Lower numbers appear first in category listings (1-100)"
    }),

    defineField({
      name: "isActive",
      type: "boolean",
      title: "Active Status",
      group: "organization",
      initialValue: true,
      description: "Whether this category should be visible on the site"
    }),

    defineField({
      name: "isFeatured",
      type: "boolean",
      title: "Featured Status",
      group: "organization",
      initialValue: false,
      description: "Highlight this category in special sections"
    }),

    defineField({
      name: "parentCategory",
      type: "reference",
      title: "Parent Category",
      group: "organization",
      to: [{ type: "articleCategory" }],
      description: "Optional parent category for hierarchical organization"
    }),

    defineField({
      name: "lastUpdated",
      type: "datetime",
      title: "Last Updated",
      group: "organization",
      readOnly: true,
      description: "When this category was last modified"
    })
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "description",
      media: "icon",
      active: "isActive",
      featured: "isFeatured",
      articleCount: "articleCount"
    },
    prepare({ title, subtitle, media, active, featured, articleCount }) {
      const status = [
        !active && "(Hidden)",
        featured && "★",
        articleCount && `(${articleCount} articles)`
      ].filter(Boolean).join(" ");

      return {
        title: title || "Untitled Category",
        subtitle: `${subtitle || "No description"} ${status}`,
        media: media || TagIcon
      };
    },
  },

  orderings: [
    {
      title: "Display Order",
      name: "displayOrderAsc",
      by: [{ field: "displayOrder", direction: "asc" }]
    },
    {
      title: "Name",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }]
    },
    {
      title: "Article Count",
      name: "articleCountDesc",
      by: [{ field: "articleCount", direction: "desc" }]
    }
  ]
});