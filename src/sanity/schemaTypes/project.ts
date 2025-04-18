// schemas/project.ts
import { defineArrayMember, defineField, defineType } from "sanity";
import { StarIcon, DocumentVideoIcon } from "@sanity/icons";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  groups: [
    { name: "generalInfo", title: "General Info", default: true },
    { name: "content", title: "Content", icon: DocumentVideoIcon },
    { name: "visibility", title: "Visibility", icon: StarIcon },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Project title (3-100 characters)",
      validation: (Rule) => Rule.required().min(3).max(100),
      group: "generalInfo",
    }),
    defineField({
      name: "slug",
      title: "Url Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
      group: "generalInfo",
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(255)
          .error("Description must be between 10-255 characters"),
      group: "generalInfo",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Cover Image",
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
              .max(150)
              .error("Meaningful image description required (1-150 chars)"),
        }),
      ],
      group: "generalInfo",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "projectCategory" },
      validation: (Rule) => Rule.required(),
      group: "generalInfo",
    }),
    defineField({
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "technology" },
        }),
      ],
      validation: (Rule) => Rule.min(1).required(),
      group: "generalInfo",
    }),
    defineField({
      name: "content",
      type: "blockContent",
      title: "Project Content",
      group: "content",
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: "links",
      type: "object",
      title: "External Links",
      group: "content",
      fields: [
        defineField({
          name: "demoUrl",
          type: "url",
          title: "Demo URL",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
            }),
        }),
        defineField({
          name: "sourceCodeUrl",
          type: "url",
          title: "Source Code URL",
          description: "GitHub/GitLab/Bitbucket URL",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
              allowRelative: false,
            }),
        }),
      ],
    }),

    defineField({
      name: "isPublished",
      title: "Publish Status",
      type: "boolean",
      initialValue: false,
      group: "visibility",
    }),
    defineField({
      name: "isFeatured",
      title: "Feature Status",
      type: "boolean",
      initialValue: false,
      group: "visibility",
    }),
    defineField({
      name: "sortOrder",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 100,
      validation: (Rule) => Rule.min(0).max(1000),
      group: "visibility",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image",
      status: "isPublished",
      featured: "isFeatured",
    },
    prepare({ title, subtitle, media, status, featured }) {
      return {
        title: title ?? "Untitled Project",
        subtitle: `${subtitle ?? "No description"} • ${status ? "Published" : "Draft"}${featured ? " ★" : ""}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Manual Sort",
      name: "sortOrderAsc",
      by: [{ field: "displayOrder", direction: "asc" }],
    },
  ],
});
