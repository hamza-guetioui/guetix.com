import { defineField, defineType } from "sanity";
import { 
  TagIcon, 
  StarIcon,
  DocumentIcon
} from "@sanity/icons";

export const articleTag = defineType({
  name: "articleTag",
  title: "Article Tag",
  type: "document",
  icon: TagIcon,
  groups: [
    {
      name: "general",
      title: "General Information",
      default: true,
      icon: TagIcon,
    },
    {
      name: "metadata",
      title: "Metadata",
      icon: DocumentIcon,
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
      title: "Tag Name",
      group: "general",
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(30)
          .regex(/^[A-Za-z0-9\s-]+$/, {
            name: "Allowed characters",
            invert: false,
          }),
      description: "The name of the tag (e.g., 'React', 'Career Growth')"
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
      description: "The URL-friendly version of the tag name"
    }),

    defineField({
      name: "description",
      type: "text",
      title: "Tag Description",
      group: "general",
      validation: (Rule) => 
        Rule.required()
          .min(10)
          .max(200)
          .error("Description must be between 10-200 characters"),
      description: "A brief description of what this tag represents"
    }),

    // Metadata
    defineField({
      name: "icon",
      type: "string",
      title: "Tag Icon",
      group: "metadata",
      description: "Icon name from your icon library"
    }),

    defineField({
      name: "color",
      type: "color",
      title: "Tag Color",
      group: "metadata",
      options: {
        disableAlpha: true,
      },
      description: "Color associated with this tag"
    }),

    defineField({
      name: "relatedTags",
      type: "array",
      title: "Related Tags",
      group: "metadata",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }]
        }
      ],
      validation: (Rule) => Rule.max(5).unique(),
      description: "Tags that are closely related to this one"
    }),

    // Organization
    defineField({
      name: "isPopular",
      type: "boolean",
      title: "Popular Tag",
      group: "organization",
      initialValue: false,
      description: "Mark this tag as popular to highlight it"
    }),

    defineField({
      name: "articleCount",
      type: "number",
      title: "Article Count",
      group: "organization",
      readOnly: true,
      description: "Number of articles using this tag (automatically updated)"
    }),

    defineField({
      name: "lastUsed",
      type: "datetime",
      title: "Last Used",
      group: "organization",
      readOnly: true,
      description: "When this tag was last used in an article"
    }),

    defineField({
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      group: "organization",
      readOnly: true,
      initialValue: () => new Date().toISOString(),
      description: "When this tag was created"
    })
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "description",
      media: "icon",
      popular: "isPopular",
      articleCount: "articleCount"
    },
    prepare({ title, subtitle, media, popular, articleCount }) {
      const status = [
        popular && "★",
        articleCount && `(${articleCount} articles)`
      ].filter(Boolean).join(" ");

      return {
        title: title || "Untitled Tag",
        subtitle: `${subtitle || "No description"} ${status}`,
        media: media || TagIcon
      };
    },
  },

  orderings: [
    {
      title: "Name",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }]
    },
    {
      title: "Article Count",
      name: "articleCountDesc",
      by: [{ field: "articleCount", direction: "desc" }]
    },
    {
      title: "Last Used",
      name: "lastUsedDesc",
      by: [{ field: "lastUsed", direction: "desc" }]
    }
  ]
});