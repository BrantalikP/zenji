import React from 'react'
import { Provider } from '../src/provider'
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { Appearance } from 'react-native'
import { palette } from '../src/features/ui/theme/palette'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: Appearance.getColorScheme() === 'dark' ? 'background' : 'background',
    values: [
      { name: 'background', value: palette.springWood },
      { name: 'white', value: 'white' },
      { name: 'black', value: 'black' },
    ],
  },
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
}

const providerDecorator = (StoryFn) => (
  <Provider>
    <StoryFn />
  </Provider>
)
export const decorators = [providerDecorator, withBackgrounds]
