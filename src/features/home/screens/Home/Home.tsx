import { useStyles } from '@brantalikp/rn-resize'
import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { styles } from './styles'
import { useUser } from '../../hook/useUser'

import { Text } from '~/components'
import { StorybookButton } from '~/components/StorybookButton'
const Home = () => {
  const { container } = useStyles(styles)
  const insets = useSafeAreaInsets()
  const { user } = useUser()

  return (
    <View style={[container, { paddingTop: insets.top }]}>
      <Text variant="h4">{`Welcome ${user?.username}`}</Text>
      <StorybookButton />
    </View>
  )
}

export { Home }
