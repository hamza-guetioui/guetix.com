import { defineArrayMember, defineField, defineType } from "sanity";
import { 
  ComposeIcon, 
  BookIcon, 
  CaseIcon, 
  UserIcon,
  StarIcon,
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
    },
    {
      name: "seo",
      title: "SEO & Metadata",
      icon: StarIcon,
    }
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
          description: "Your main title or role (e.g., 'Full Stack Developer')"
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
          description: "A catchy one-liner that describes what you do"
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
              description: "A brief introduction about yourself"
            }),
            defineField({
              name: "highlight",
              type: "string",
              title: "Highlight Text",
              validation: (Rule) => Rule.required().min(2).max(50),
              description: "A key phrase or skill to emphasize"
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
              description: "Description of the image for accessibility"
            }),
          ],
        }),

        defineField({
          name: "ctaButtons",
          title: "Call to Action Buttons",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              title: "Button",
              fields: [
                defineField({
                  name: "text",
                  type: "string",
                  title: "Button Text",
                  validation: (Rule) => Rule.required().min(2).max(20)
                }),
                defineField({
                  name: "url",
                  type: "url",
                  title: "Button URL",
                  validation: (Rule) => Rule.required().uri({
                    scheme: ["http", "https", "mailto", "tel"]
                  })
                }),
                defineField({
                  name: "variant",
                  type: "string",
                  title: "Button Style",
                  options: {
                    list: [
                      { title: "Primary", value: "primary" },
                      { title: "Secondary", value: "secondary" },
                      { title: "Outline", value: "outline" }
                    ],
                    layout: "radio"
                  },
                  initialValue: "primary"
                })
              ]
            })
          ],
          validation: (Rule) => Rule.max(3)
        })
      ]
    }),

    // About Section
    defineField({
      name: "aboutContent",
      title: "About Content",
      type: "array",
      group: "about",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
      description: "Detailed information about yourself and your work"
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
            // ... existing education fields ...
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
            // ... existing experience fields ...
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
          description: "Your primary email address"
        }),
        defineField({
          name: "phone",
          type: "string",
          title: "Phone Number",
          validation: (Rule) => Rule.required().min(10).max(15),
          description: "Your contact phone number"
        }),
        defineField({
          name: "location",
          type: "string",
          title: "Location",
          validation: (Rule) => Rule.required().min(3).max(100),
          description: "Your current location"
        }),
        defineField({
          name: "socialLinks",
          title: "Social Media Links",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              title: "Social Link",
              fields: [
                defineField({
                  name: "platform",
                  type: "string",
                  title: "Platform",
                  options: {
                    list: [
                      { title: "LinkedIn", value: "linkedin" },
                      { title: "GitHub", value: "github" },
                      { title: "Twitter", value: "twitter" },
                      { title: "Instagram", value: "instagram" },
                      { title: "Other", value: "other" }
                    ]
                  }
                }),
                defineField({
                  name: "url",
                  type: "url",
                  title: "Profile URL",
                  validation: (Rule) => Rule.required().uri({
                    scheme: ["http", "https"]
                  })
                }),
                defineField({
                  name: "label",
                  type: "string",
                  title: "Custom Label",
                  description: "Custom label for 'Other' platform type"
                })
              ]
            })
          ],
          validation: (Rule) => Rule.max(5)
        }),
        defineField({
          name: "availability",
          type: "string",
          title: "Availability Status",
          options: {
            list: [
              { title: "Available for Work", value: "available" },
              { title: "Open to Opportunities", value: "open" },
              { title: "Not Available", value: "unavailable" }
            ]
          },
          initialValue: "open"
        })
      ]
    }),

    // SEO & Metadata
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "object",
      group: "seo",
      fields: [
        // ... existing SEO fields ...
      ]
    })
  ],

  preview: {
    select: {
      title: "hero.title",
      subtitle: "hero.headline",
      media: "hero.image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Home Page",
        subtitle: subtitle || "No headline set",
        media: media || UserIcon,
      };
    },
  },
});