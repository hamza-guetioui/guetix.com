import { defineArrayMember, defineField, defineType } from "sanity";
import { ComposeIcon, BookIcon, CaseIcon } from "@sanity/icons";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  groups: [
    {
      name: "hero",
      title: "Hero Section",
      default: true,
      icon: ComposeIcon,
    },
    {
      name: "formation",
      title: "Formation",
      icon: BookIcon,
    },
    {
      name: "experience",
      title: "Work Experience",
      icon: CaseIcon,
    },
  ],
  fields: [
    // Hero Section
    defineField({
      name: "heroTitle",
      type: "string",
      title: "Hero Title",
      group: "hero",
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .max(20)
          .regex(/^[\w\s,.!?'-()&:]*$/, {
            name: "Allowed characters",
            invert: false,
          }),
    }),

    defineField({
      name: "heroHeadline",
      type: "string",
      title: "Main Headline",
      group: "hero",
      validation: (Rule) =>
        Rule.required()
          .min(5)
          .max(50)
          .regex(/^[\w\s,.!?'-()&:]*$/),
    }),

    defineField({
      name: "heroSubheadline",
      title: "Subheadline",
      type: "object",
      group: "hero",
      fields: [
        defineField({
          name: "text",
          type: "text",
          validation: (Rule) => Rule.required().min(10).max(255),
        }),
        defineField({
          name: "highlight",
          type: "string",
          validation: (Rule) => Rule.required().min(2).max(50),
        }),
      ],
    }),

    defineField({
      name: "heroImage",
      type: "image",
      title: "Hero Image",
      group: "hero",
      options: {
        hotspot: true,
        metadata: ["lqip", "palette"],
      },
      fields: [
        defineField({
          name: "altText",
          type: "string",
          validation: (Rule) =>
            Rule.required()
              .min(10)
              .max(150)
              .regex(/^[\w\s,.!?'-()&:]*$/),
        }),
      ],
    }),

    // About Section
    defineField({
      name: "formations",
      title: "Education",
      type: "array",
      group: "formation",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
              validation: (Rule) => Rule.required().min(3).max(100),
            }),
            defineField({
              name: "institution",
              type: "string",
              validation: (Rule) => Rule.required().min(3).max(100),
            }),
            defineField({
              name: "description",
              type: "text",
              validation: (Rule) => Rule.required().min(10).max(500),
            }),
            // Date Range (From and To)
            defineField({
              name: "date",
              type: "object",
              title: "Date Range",
              fields: [
                defineField({
                  name: "from",
                  type: "date",
                  title: "From",
                  description: "Start date of the experience.",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "to",
                  type: "date",
                  title: "To",
                  description: "End date of the experience.",
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
            
            defineField({
              name: "skills",
              type: "array",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.max(5).unique(),
            }),
          ],
        }),
      ],
    }),

    // Experience Section
    defineField({
      name: "experiences",
      title: "Work Experience",
      type: "array",
      group: "experience",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "company",
              type: "string",
              validation: (Rule) => Rule.required().min(3).max(100),
            }),
            defineField({
              name: "employmentType",
              type: "string",
              options: {
                list: [
                  { title: "Full-time", value: "full-time" },
                  { title: "Part-time", value: "part-time" },
                  { title: "Contract", value: "contract" },
                  { title: "Freelance", value: "freelance" },
                ],
                layout: "dropdown",
              },
            }),
        
            defineField({
              name: "role",
              type: "string",
              validation: (Rule) => Rule.required().min(3).max(100),
            }),
            defineField({
              name: "achievements",
              type: "array",
              of: [{ type: "block" }],
              validation: (Rule) => Rule.required().min(3),
            }),
             // Date Range (From and To)
             defineField({
              name: "date",
              type: "object",
              title: "Date Range",
              fields: [
                defineField({
                  name: "from",
                  type: "date",
                  title: "From",
                  description: "Start date of the experience.",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "to",
                  type: "date",
                  title: "To",
                  description: "End date of the experience.",
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "heroTitle",
      subtitle: "heroSubheadline.text",
      media: "heroImage",
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.subtitle || "No subheadline",
        media: selection.media,
      };
    },
  },
});

// Date Range Custom Type
export const dateRange = defineType({
  name: "dateRange",
  title: "Date Range",
  type: "object",
  fields: [
    defineField({
      name: "start",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "end",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
