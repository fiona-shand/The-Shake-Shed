import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || ''
const dataset =
  process.env.SANITY_STUDIO_DATASET || process.env.VITE_SANITY_DATASET || 'production'

if (!projectId) {
  throw new Error(
    'Missing Sanity project ID. Set SANITY_STUDIO_PROJECT_ID in studio/.env or the root .env file.',
  )
}

export default defineConfig({
  name: 'the-shake-shed',
  title: 'The Shake Shed',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site images')
              .id('siteImages')
              .child(
                S.document().schemaType('siteImages').documentId('siteImages'),
              ),
            ...S.documentTypeListItems().filter((item) => item.getId() !== 'siteImages'),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
