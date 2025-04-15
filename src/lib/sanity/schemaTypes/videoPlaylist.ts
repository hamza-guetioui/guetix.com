import { defineField, defineType } from "sanity";
import { PlayIcon } from "@sanity/icons";

export const videoPlaylist = defineType({
  name: "videoPlaylist",
  title: "Video Playlist",
  type: "document",
  icon: PlayIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Playlist Title",
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .max(100)
          .regex(/^[\w\s,.!?'-()&:]*$/),
      description: "The title of the playlist"
    }),

    defineField({
      name: "slug",
      type: "slug",
      title: "URL Slug",
      options: {
        source: "title",
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
          .max(500)
    }),

    defineField({
      name: "coverImage",
      type: "image",
      title: "Cover Image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt Text",
          validation: (Rule) => Rule.required()
        })
      ]
    }),

    defineField({
      name: "videos",
      type: "array",
      title: "Videos",
      of: [
        {
          type: "reference",
          to: [{ type: "video" }]
        }
      ],
      validation: (Rule) => Rule.required().min(1)
    }),

    defineField({
      name: "isPublic",
      type: "boolean",
      title: "Public Playlist",
      initialValue: true,
      description: "Whether this playlist is visible to everyone"
    })
  ]
});