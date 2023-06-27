import type { StorybookConfig } from '@storybook/react-webpack5'

import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-react-native-web',
      // https://github.com/storybookjs/addon-react-native-web/issues/26
      options: {
        modulesToTranspile: ['dripsy', '@dripsy/core', 'react-native-reanimated'],
        babelPlugins: ['react-native-reanimated/plugin'],
        projectRoot: path.resolve(__dirname, '../../'),
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
