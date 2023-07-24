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
      <Text style={{ ...fontsStyles.h1 }}>Header 1</Text>
      <Text style={{ ...fontsStyles.h2 }}>Header 2</Text>
      <Text style={{ ...fontsStyles.h3 }}>Header 3</Text>
      <Text style={{ ...fontsStyles.h4 }}>Header 4</Text>
      <Text style={{ ...fontsStyles.h5 }}>Header 5</Text>
      <Text style={{ ...fontsStyles.h6 }}>Header 6</Text>
      <Text style={{ ...fontsStyles.body }}>body</Text>
      <Text style={{ ...fontsStyles.bodyLight }}>body light</Text>
      <Text style={{ ...fontsStyles.button }}>button</Text>
      <Text style={{ ...fontsStyles.link }}>link</Text>
      <Text style={{ ...fontsStyles.bodySmall }}>button small</Text>
      <Text style={{ ...fontsStyles.caption }}>caption</Text>

      <Link href="/storybook" asChild>
        <Pressable>
          <Text>Go to Storybook</Text>
        </Pressable>
      </Link>
    </View>
  )
}

export { Home }
