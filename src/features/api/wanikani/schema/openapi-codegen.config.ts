import { defineConfig } from '@openapi-codegen/cli'
import { generateSchemaTypes, generateReactQueryComponents } from '@openapi-codegen/typescript'
export default defineConfig({
  wanikani: {
    from: {
      relativePath: './wanikani.yaml',
      source: 'file',
    },
    outputDir: '..',
    to: async (context) => {
      const filenamePrefix = ''
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      })
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      })
    },
  },
})
