import { defineType, defineArrayMember, defineField } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContent = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  icon: BlockContentIcon,
  of: [
    defineArrayMember({
      type: "block",
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
        { title: "Code", value: "code" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              defineField({
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              }),
              defineField({
                title: "Open in new tab",
                name: "blank",
                type: "boolean",
                initialValue: true,
              }),
            ],
          },
          {
            title: "Internal Link",
            name: "internalLink",
            type: "object",
            fields: [
              defineField({
                name: "reference",
                type: "reference",
                to: [{ type: "article" }, { type: "project" }],
              }),
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: "image",
      name: "contentImage",
      title: "Image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative Text",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "caption",
          type: "string",
          title: "Caption",
        }),
      ],
    }),
    defineArrayMember({
      type: "code",
      name: "codeBlock",
      title: "Code Block",
      options: {
        language: "typescript",
        languageAlternatives: [
          { title: "TypeScript", value: "typescript" },
          { title: "JavaScript", value: "javascript" },
          { title: "HTML", value: "html" },
          { title: "CSS", value: "css" },
          { title: "Python", value: "python" },
          { title: "Java", value: "java" },
          { title: "C++", value: "cpp" },
          { title: "Shell", value: "shell" },
        ],
      },
    }),
    defineArrayMember({
      type: "object",
      name: "contentVideo",
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
});
