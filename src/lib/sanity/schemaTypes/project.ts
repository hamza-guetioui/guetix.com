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
      title: "Slug",
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
      title: "Technologies",
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
      type: "array",
      title: "Project Content",
      group: "content",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "URL",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ["http", "https", "mailto", "tel"],
                      }),
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alt Text",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineArrayMember({
          name: "videoEmbed",
          type: "object",
          title: "Video Embed",
          fields: [
            defineField({
              name: "url",
              type: "url",
              title: "Video URL",
              description: "YouTube/Vimeo URL",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "caption",
              type: "string",
              title: "Caption",
              validation: (Rule) => Rule.max(120),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "externalLinks",
      type: "object",
      title: "External Links",
      group: "content",
      fields: [
        defineField({
          name: "liveUrl",
          type: "url",
          title: "Live URL",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https"],
            }),
        }),
        defineField({
          name: "repository",
          type: "url",
          title: "Code Repository",
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
      title: "Publish Project",
      type: "boolean",
      initialValue: false,
      group: "visibility",
    }),
    defineField({
      name: "isFeatured",
      title: "Feature Project",
      type: "boolean",
      initialValue: false,
      group: "visibility",
    }),
    defineField({
      name: "sortOrder",
      title: "Sort Order",
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
      media: "coverImage",
      status: "isPublished",
      featured: "isFeatured",
    },
    prepare({ title, subtitle, media, status, featured }) {
      return {
        title: title || "Untitled Project",
        subtitle: `${subtitle || "No description"} • ${status ? "Published" : "Draft"}${featured ? " ★" : ""}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Manual Sort",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
    {
      title: "Featured First",
      name: "featuredOrderAsc",
      by: [{ field: "featuredOrder", direction: "asc" }],
    },
  ],
});
