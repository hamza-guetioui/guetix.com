import { defineArrayMember, defineField, defineType } from "sanity";
import {
  ComposeIcon,
  BookIcon,
  CaseIcon,
  UserIcon,
  StarIcon,
  ApiIcon,
  HomeIcon,
} from "@sanity/icons";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  groups: [
    {
      name: "hero",
      title: "Hero Section",
      default: true,
      icon: UserIcon,
    },
    {
      name: "about",
      title: "About Section",
      icon: ComposeIcon,
    },
    {
      name: "education",
      title: "Education",
      icon: BookIcon,
    },
    {
      name: "experience",
      title: "Work Experience",
      icon: CaseIcon,
    },
    {
      name: "contact",
      title: "Contact Information",
      icon: ApiIcon,
    },
    {
      name: "seo",
      title: "SEO & Metadata",
      icon: StarIcon,
    },
  ],
  fields: [
    // Hero Section
    defineField({
      name: "hero",
      type: "object",
      title: "Hero Section",
      group: "hero",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Hero Title",
          validation: (Rule) =>
            Rule.required()
              .min(3)
              .max(30)
              .regex(/^[\w\s,.!?'-()&:]*$/, {
                name: "Allowed characters",
                invert: false,
              }),
          description: "Your main title or role (e.g., 'Full Stack Developer')",
        }),
        defineField({
          name: "headline",
          type: "string",
          title: "Hero Headline",
          validation: (Rule) =>
            Rule.required()
              .min(5)
              .max(100)
              .regex(/^[a-zA-Z0-9\s,.!?'"()&:+-]*$/),
          description: "A catchy one-liner that describes what you do",
        }),
        defineField({
          name: "bio",
          title: "Hero Bio",
          type: "object",
          fields: [
            defineField({
              name: "text",
              type: "text",
              title: "Bio Text",
              validation: (Rule) => Rule.required().min(10).max(255),
              description: "A brief introduction about yourself",
            }),
            defineField({
              name: "highlight",
              type: "string",
              title: "Highlight Text",
              validation: (Rule) => Rule.required().min(2).max(50),
              description: "A key phrase or skill to emphasize",
            }),
            defineField({
              name: "highlightColor",
              type: "color",
              title: "highlightColor",
              description: "the color of the highlight text",
            }),
          ],
        }),
        defineField({
          name: "image",
          type: "image",
          title: "Profile Image",
          options: {
            hotspot: true,
            metadata: ["lqip", "palette"],
          },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alt Text",
              validation: (Rule) =>
                Rule.required()
                  .min(10)
                  .max(150)
                  .regex(/^[\w\s,.!?'-()&:]*$/),
              description: "Description of the image for accessibility",
            }),
          ],
        }),
        defineField({
          name: "callToAction",
          title: "Call to Action Button",
          type: "object",
          fields: [
            defineField({
              name: "text",
              type: "string",
              title: "Button Text",
              validation: (Rule) => Rule.required().min(2).max(20),
            }),
            defineField({
              name: "url",
              type: "url",
              title: "Button URL",
              validation: (Rule) =>
                Rule.required().uri({
                  scheme: ["http", "https", "mailto", "tel"],
                }),
            }),
            defineField({
              name: "variant",
              type: "string",
              title: "Button Style",
              options: {
                list: [
                  { title: "Primary", value: "primary" },
                  { title: "Secondary", value: "secondary" },
                  { title: "Outline", value: "outline" },
                ],
                layout: "radio",
              },
              initialValue: "primary",
            }),
          ],
        }),
      ],
    }),

    // About Section
    defineField({
      name: "aboutContent",
      title: "About Content",
      type: "array",
      group: "about",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
      description: "Detailed information about yourself and your work",
    }),

    // Education Section
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      group: "education",
      of: [
        defineArrayMember({
          type: "object",
          title: "Education Entry",
          fields: [
            defineField({
              name: "degree",
              type: "string",
              title: "Degree/Certification",
              validation: (Rule) => Rule.required().min(3).max(100),
              description: "Name of the degree or certification",
            }),
            defineField({
              name: "institution",
              type: "string",
              title: "Institution",
              validation: (Rule) => Rule.required().min(3).max(100),
              description: "Name of the educational institution",
            }),
            defineField({
              name: "description",
              type: "text",
              title: "Description",
              validation: (Rule) => Rule.required().min(10).max(500),
              description: "Details about your education",
            }),
            defineField({
              name: "dateRange",
              type: "object",
              title: "Date Range",
              fields: [
                defineField({
                  name: "startDate",
                  type: "date",
                  title: "Start Date",
                  validation: (Rule) => Rule.required(),
                  description: "Start date of the education",
                }),
                defineField({
                  name: "endDate",
                  type: "date",
                  title: "End Date",
                  description:
                    "End date of the education (leave empty if current)",
                }),
                defineField({
                  name: "isCurrent",
                  type: "boolean",
                  title: "Currently Studying",
                  initialValue: false,
                  description: "Check if you are currently studying here",
                }),
              ],
            }),
            defineField({
              name: "location",
              type: "string",
              title: "Location",
              validation: (Rule) => Rule.required().min(3).max(100),
              description: "Location of the institution",
            }),
            defineField({
              name: "skills",
              type: "array",
              title: "Skills Learned",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.max(5).unique(),
              description: "Key skills or subjects learned",
            }),
            defineField({
              name: "achievements",
              type: "array",
              title: "Achievements",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.max(5),
              description: "Notable achievements during this education",
            }),
          ],
        }),
      ],
    }),

    // Experience Section
    defineField({
      name: "experience",
      title: "Work Experience",
      type: "array",
      group: "experience",
      of: [
        defineArrayMember({
          type: "object",
          title: "Experience Entry",
          fields: [
            defineField({
              name: "company",
              type: "string",
              title: "Company Name",
              validation: (Rule) => Rule.required().min(3).max(100),
              description: "Name of the company or organization",
            }),
            defineField({
              name: "role",
              type: "string",
              title: "Job Role",
              validation: (Rule) => Rule.required().min(3).max(100),
              description: "Your position or role in the company",
            }),
            defineField({
              name: "employmentType",
              type: "string",
              title: "Employment Type",
              options: {
                list: [
                  { title: "Full-time", value: "full-time" },
                  { title: "Part-time", value: "part-time" },
                  { title: "Contract", value: "contract" },
                  { title: "Freelance", value: "freelance" },
                  { title: "Internship", value: "internship" },
                ],
                layout: "dropdown",
              },
              description: "Type of employment",
            }),
            defineField({
              name: "description",
              type: "text",
              title: "Job Description",
              validation: (Rule) => Rule.required().min(10).max(500),
              description:
                "Brief description of your role and responsibilities",
            }),
            defineField({
              name: "dateRange",
              type: "object",
              title: "Date Range",
              fields: [
                defineField({
                  name: "startDate",
                  type: "date",
                  title: "Start Date",
                  validation: (Rule) => Rule.required(),
                  description: "Start date of the employment",
                }),
                defineField({
                  name: "endDate",
                  type: "date",
                  title: "End Date",
                  description:
                    "End date of the employment (leave empty if current)",
                }),
              ],
            }),
            defineField({
              name: "isCurrent",
              type: "boolean",
              title: "Current Position",
              initialValue: false,
              description: "Check if this is your current position",
            }),
            defineField({
              name: "location",
              type: "string",
              title: "Location",
              validation: (Rule) => Rule.required().min(3).max(100),
              description: "Location of the company",
            }),
            defineField({
              name: "skills",
              type: "array",
              title: "Skills Used",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.max(5).unique(),
              description: "Key technologies and skills used",
            }),
            defineField({
              name: "achievements",
              type: "array",
              title: "Key Achievements",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.max(5),
              description: "Notable accomplishments in this role",
            }),
          ],
        }),
      ],
    }),

    // Contact Information
    defineField({
      name: "contact",
      title: "Contact Information",
      type: "object",
      group: "contact",
      fields: [
        defineField({
          name: "email",
          type: "string",
          title: "Email Address",
          validation: (Rule) => Rule.required().email(),
          description: "Your primary email address",
        }),
        defineField({
          name: "phone",
          type: "string",
          title: "Phone Number",
          validation: (Rule) => Rule.required().min(10).max(15),
          description: "Your contact phone number",
        }),
      ],
    }),

    // SEO & Metadata
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
          description: "Title for search engines (max 60 characters)",
        }),
        defineField({
          name: "metaDescription",
          type: "text",
          title: "Meta Description",
          validation: (Rule) => Rule.max(160),
          description: "Description for search engines (max 160 characters)",
        }),
        defineField({
          name: "ogImage",
          type: "image",
          title: "Open Graph Image",
          description: "Image for social media sharing",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "hero.title",
      subtitle: "hero.headline",
      media: "hero.image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title ?? "Home Page",
        subtitle: subtitle ?? "No headline set",
        media: media ?? UserIcon,
      };
    },
  },
});

export const homePageContent = defineType({
  name: "homePageContent",
  title: "Home Page Content",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().min(10).max(200),
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative Text",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "featuredProjects",
      title: "Featured Projects",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }],
        },
      ],
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: "featuredTechnologies",
      title: "Featured Technologies",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "technology" }],
        },
      ],
      validation: (Rule) => Rule.max(8),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "heroImage",
    },
  },
});
