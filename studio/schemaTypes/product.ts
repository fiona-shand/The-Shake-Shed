import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Menu product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Short caption',
      description: 'Shown under the product image on the menu cards.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'detail',
      title: 'Description',
      description: 'Longer copy in the full menu list.',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Product photo',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'showcase',
      title: 'Where it appears',
      type: 'string',
      options: {
        list: [
          { title: 'Top row (3 cards)', value: 'primary' },
          { title: 'Second row (3 cards)', value: 'secondary' },
          { title: 'Full menu only', value: 'none' },
        ],
        layout: 'radio',
      },
      initialValue: 'none',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort order',
      description: 'Lower numbers appear first within each section.',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Sort order',
      name: 'sortOrderAsc',
      by: [{ field: 'sortOrder', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'showcase',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      const labels: Record<string, string> = {
        primary: 'Top row',
        secondary: 'Second row',
        none: 'Full menu only',
      }
      return {
        title,
        subtitle: labels[subtitle] ?? subtitle,
        media,
      }
    },
  },
})
