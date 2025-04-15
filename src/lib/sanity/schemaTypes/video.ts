import {  defineField, defineType } from "sanity";
import { 
  PlayIcon, 
  TagIcon, 
  MasterDetailIcon,
  StarIcon,
} from "@sanity/icons";

export const video = defineType({
  name: "video",
  title: "Video",
  type: "document",
  icon: PlayIcon,
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
      icon: PlayIcon,
    },
    {
      name: "metadata",
      title: "Metadata",
      icon: TagIcon,
    },
    {
      name: "playlist",
      title: "Playlist",
      icon: MasterDetailIcon,
    },
    {
      name: "seo",
      title: "SEO",
      icon: StarIcon,
    }
  ],
  fields: [
    // Content
    defineField({
      name: "title",
      type: "string",
      title: "Video Title",
      group: "content",
      validation: (Rule) =>
        Rule.required()
          .min(5)
          .max(100)
          .regex(/^[\w\s,.!?'-()&:]*$/, {
            name: "Allowed characters",
            invert: false,
          }),
      description: "The title of your video"
    }),

    defineField({
      name: "slug",
      type: "slug",
      title: "URL Slug",
      group: "content",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: "The URL-friendly version of the title"
    }),

    defineField({
      name: "description",
      type: "text",
      title: "Video Description",
      group: "content",
      validation: (Rule) => 
        Rule.required()
          .min(10)
          .max(500)
          .error("Description must be between 10-500 characters"),
      description: "A detailed description of the video content"
    }),

    defineField({
      name: "videoUrl",
      type: "url",
      title: "Video URL",
      group: "content",
      validation: (Rule) => 
        Rule.required()
          .uri({
            scheme: ["https"],
            allowRelative: false,
          })
          .custom((url) => {
            if (!url) return true;
            return url.includes("youtube.com") || url.includes("vimeo.com")
              ? true
              : "Only YouTube and Vimeo URLs are allowed";
          }),
      description: "The URL of the video (YouTube or Vimeo)"
    }),

    defineField({
      name: "thumbnail",
      type: "image",
      title: "Video Thumbnail",
      group: "content",
      options: {
        hotspot: true,
        metadata: ["lqip", "palette"],
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt Text",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // Metadata
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      group: "metadata",
      of: [
        {
          type: "reference",
          to: [{ type: "videoTag" }]
        }
      ],
      validation: (Rule) => Rule.max(10).unique(),
      description: "Tags related to the video content"
    }),

    defineField({
      name: "duration",
      type: "number",
      title: "Duration (minutes)",
      group: "metadata",
      validation: (Rule) => Rule.required().min(1),
      description: "Length of the video in minutes"
    }),


    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
      group: "metadata",
      validation: (Rule) => Rule.required(),
      description: "When the video was published"
    }),

    // Playlist
    defineField({
      name: "playlists",
      type: "array",
      title: "Playlists",
      group: "playlist",
      of: [
        {
          type: "reference",
          to: [{ type: "videoPlaylist" }]
        }
      ],
      description: "Playlists this video belongs to"
    }),

    defineField({
      name: "isFeatured",
      type: "boolean",
      title: "Featured Video",
      group: "playlist",
      initialValue: false,
      description: "Highlight this video in special sections"
    }),

    // SEO
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "object",
      group: "seo",
      fields: [
        defineField({
          name: "metaTitle",
          type: "string",
          title: "Meta Title",
          validation: (Rule) => Rule.max(60),
          description: "Title for search engines (max 60 characters)"
        }),
        defineField({
          name: "metaDescription",
          type: "text",
          title: "Meta Description",
          validation: (Rule) => Rule.max(160),
          description: "Description for search engines (max 160 characters)"
        }),
        defineField({
          name: "ogImage",
          type: "image",
          title: "Open Graph Image",
          description: "Image for social media sharing",
          options: {
            hotspot: true
          }
        })
      ]
    }),

 
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "thumbnail",
      status: "status",
      publishedAt: "publishedAt",
      duration: "duration"
    },
    prepare({ title, media, publishedAt, duration }) {
 
      return {
        title: title || "Untitled Video",
        subtitle: ` ${duration ? `${duration} min` : ""} • ${publishedAt ? new Date(publishedAt).toLocaleDateString() : "Not published"}`,
        media: media || PlayIcon
      };
    },
  },

  orderings: [
    {
      title: "Publication Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }]
    },
    {
      title: "Publication Date, Old",
      name: "publishedAtAsc",
      by: [{ field: "publishedAt", direction: "asc" }]
    },
    {
      title: "Title",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }]
    },
  ]
});