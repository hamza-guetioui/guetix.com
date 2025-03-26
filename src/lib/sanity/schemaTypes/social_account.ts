import { defineType, defineField } from 'sanity'
import { LinkIcon } from '@sanity/icons'

export const socialAccounts = defineType({
  name: 'socialAccounts',
  title: 'Social Media Accounts',
  type: 'document',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform Name',
      type: 'string',
      description: 'e.g., GitHub, Twitter, LinkedIn, Personal Blog, etc.',
      validation: Rule => Rule.required()
        .min(2)
        .max(30)
        .regex(/^[A-Za-z0-9\s&]+$/, 
           'Only letters, numbers, spaces, and & are allowed')
    }),
    defineField({
      name: 'username',
      title: 'Username/Handle',
      type: 'string',
      validation: Rule => Rule.required()
        .min(2)
        .max(50)
        .regex(/^[A-Za-z0-9_\-\.]+$/, 'Only letters, numbers, underscores, hyphens, and periods allowed'
        )
    }),
    defineField({
      name: 'url',
      title: 'Profile URL',
      type: 'url',
      validation: Rule => Rule.required().uri({
        scheme: ['http', 'https'],
        allowRelative: false
      })
    }),
    defineField({
      name: 'icon',
      title: 'Platform Icon',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: Rule => Rule.max(100)
        })
      ]
    }),
    defineField({
      name: 'displayPriority',
      title: 'Display Priority (1-100)',
      type: 'number',
      initialValue: 50,
      validation: Rule => Rule.required().min(1).max(100).integer()
    }),
    defineField({
      name: 'isActive',
      title: 'Visible on Profile?',
      type: 'boolean',
      initialValue: true
    })
  ],
  orderings: [
    {
      title: 'By Priority',
      name: 'priorityAsc',
      by: [{ field: 'displayPriority', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      platform: 'platform',
      username: 'username',
      active: 'isActive',
      media: 'icon'
    },
    prepare({ platform, username, active, media }) {
      return {
        title: `${platform} ${active ? '' : '(Hidden)'}`,
        subtitle: `@${username}`,
        media
      }
    }
  }
})