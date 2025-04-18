import { defineType, defineField } from "sanity";
import { LinkIcon } from "@sanity/icons";

export const socialAccounts = defineType({
  name: "socialAccounts",
  title: "Social Media Accounts",
  type: "document",
  icon: LinkIcon,
  groups: [
    { name: "accountInfo", title: "Account Information", default: true },
    { name: "appearance", title: "Appearance" },
    { name: "visibility", title: "Visibility" },
  ],
  fields: [
    // Account Information
    defineField({
      name: "platform",
      title: "Platform Name",
      type: "string",
      group: "accountInfo",
      description: "e.g., GitHub, X, LinkedIn, Personal Blog, etc.",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(30)
          .regex(
            /^[A-Za-z0-9\s&]+$/,
            "Only letters, numbers, spaces, and & are allowed"
          ),
    }),

    defineField({
      name: "username",
      title: "Username/Handle",
      type: "string",
      group: "accountInfo",
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(50)
          .regex(
            /^[A-Za-z0-9\s\-./]+$/,
            "Only letters, numbers, underscores, hyphens, and periods allowed"
          ),
    }),

    defineField({
      name: "profileUrl",
      title: "Profile URL",
      type: "url",
      group: "accountInfo",
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ["http", "https"],
          allowRelative: false,
        }),
      description: "Full URL to your profile on this platform",
    }),

    // Appearance
    defineField({
      name: "icon",
      title: "Platform Icon",
      type: "image",
      group: "appearance",
      options: {
        hotspot: true,
        metadata: ["lqip", "palette"],
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) => Rule.required().max(100),
        }),
      ],
    }),

    defineField({
      name: "color",
      title: "Custom Color",
      type: "color",
      group: "appearance",
      options: {
        disableAlpha: true,
      },
      description: "Optional custom color for this platform",
    }),

    // Visibility & Organization
    defineField({
      name: "sortOrder",
      title: "Display Order",
      type: "number",
      group: "visibility",
      initialValue: 50,
      validation: (Rule) => Rule.required().min(1).max(100).integer(),
      description: "Lower numbers appear first (1-100)",
    }),

    defineField({
      name: "isActive",
      title: "Active Status",
      type: "boolean",
      group: "visibility",
      initialValue: true,
      description: "Whether this social account should be visible",
    }),

    defineField({
      name: "isFeatured",
      title: "Featured Account",
      type: "boolean",
      group: "visibility",
      initialValue: false,
      description: "Highlight this account in special sections",
    }),
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "datetime",
      group: "visibility",
      readOnly: true,
      description: "Automatically updated when the record is modified",
    }),
  ],
  orderings: [
    {
      title: "By Display Order",
      name: "displayOrderAsc",
      by: [{ field: "displayOrder", direction: "asc" }],
    },
    {
      title: "By Platform Name",
      name: "platformAsc",
      by: [{ field: "platform", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      platform: "platform",
      username: "username",
      displayName: "displayName",
      active: "isActive",
      featured: "isFeatured",
      media: "icon",
    },
    prepare({ platform, username, displayName, active, featured, media }) {
      const status = [!active && "(Hidden)", featured && "★"]
        .filter(Boolean)
        .join(" ");

      return {
        title: `${platform} ${status}`,
        subtitle: displayName ?? `@${username}`,
        media: media ?? LinkIcon,
      };
    },
  },
});
