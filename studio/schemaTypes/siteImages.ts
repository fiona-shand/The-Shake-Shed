import { defineArrayMember, defineField, defineType } from 'sanity'

const imageWithAlt = defineArrayMember({
  type: 'object',
  name: 'imageWithAlt',
  title: 'Image',
  fields: [
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'altText',
      title: 'Alt text',
      description: 'Short description for accessibility and SEO.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: 'altText', media: 'image' },
  },
})

export const siteImages = defineType({
  name: 'siteImages',
  title: 'Site images',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImages',
      title: 'Hero images',
      description: 'Two large photos at the top of the homepage (left, then right).',
      type: 'array',
      of: [imageWithAlt],
      validation: (rule) => rule.min(2).max(2),
    }),
    defineField({
      name: 'wildShots',
      title: 'In the wild',
      description: 'Four lifestyle photos in the “the shake shed in the wild” grid.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'wildShot',
          title: 'Photo',
          fields: [
            defineField({
              name: 'image',
              title: 'Photo',
              type: 'image',
              options: { hotspot: true },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'altText',
              title: 'Alt text',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'sortOrder',
              title: 'Sort order',
              description: 'Lower numbers appear first (left to right).',
              type: 'number',
              initialValue: 0,
            }),
          ],
          preview: {
            select: { title: 'altText', media: 'image', sortOrder: 'sortOrder' },
            prepare({ title, media, sortOrder }) {
              return {
                title,
                subtitle: typeof sortOrder === 'number' ? `Order: ${sortOrder}` : undefined,
                media,
              }
            },
          },
        }),
      ],
      validation: (rule) => rule.min(4).max(4),
    }),
  ],
})
