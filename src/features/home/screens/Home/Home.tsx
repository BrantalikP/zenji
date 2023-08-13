import { useStyles } from '@brantalikp/rn-resize'
import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { styles } from './styles'

import { Text } from '~/components'
import { useGetUser } from '~/features/api/wanikani/components'
const Home = () => {
  const { container } = useStyles(styles)
  const insets = useSafeAreaInsets()
  const { data } = useGetUser({})
  const username = data?.data?.username

  return (
    <View style={[container, { paddingTop: insets.top }]}>
      <Text variant="h4">{`Welcome ${username}`}</Text>
    </View>
  )
}

export { Home }
