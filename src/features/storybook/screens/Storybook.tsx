import { View } from 'react-native'

const Storybook = () => {
  const StorybookUI = require('../../../../.storybook').default
  return (
    <View style={{ flex: 1 }}>
      <StorybookUI />
    </View>
  )
}

export { Storybook }
