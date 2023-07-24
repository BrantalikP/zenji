import { useStyles } from '@brantalikp/rn-resize'
import { Link } from 'expo-router'
import React from 'react'
import { Pressable, View } from 'react-native'

import { styles } from './styles'

import { useGetUser } from '~/features/api/wanikani/components'
import { Text } from '~/features/ui/components/Text'
import { fontsStyles } from '~/features/ui/theme/fontsStyles'
const Home = () => {
  const { container } = useStyles(styles)

  // const { data } = useGetUser({})
  // const username = data?.data?.username

  return (
    <View style={container}>
      {/* <Text>Hello {username}</Text> */}
      <Text variant="h1">Header 1</Text>
      <Text>Header 2</Text>
      <Text>Header 3</Text>
      <Text>Header 4</Text>
      <Text>Header 5</Text>
      <Text>Header 6</Text>
      <Text>body</Text>
      <Text>body light</Text>
      <Text>button</Text>
      <Text>link</Text>
      <Text>button small</Text>
      <Text>caption</Text>

      <Link href="/storybook" asChild>
        <Pressable>
          <Text>Go to Storybook</Text>
        </Pressable>
      </Link>
    </View>
  )
}

export { Home }
