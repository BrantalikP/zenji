import { useStyles } from '@brantalikp/rn-resize'
import { Link } from 'expo-router'
import React from 'react'
import { Pressable, View } from 'react-native'

import { styles } from './styles'

import { Button, Input, Text } from '~/components'
import { useGetUser } from '~/features/api/wanikani/components'
import { defaultTheme } from '~/features/ui/theme/themes'
const Home = () => {
  const { container } = useStyles(styles)

  // const { data } = useGetUser({})
  // const username = data?.data?.username

  return (
    <View style={container}>
      <Button label="Get Started" onPress={() => console.log('test')} />
      <Text variant="h1">Home</Text>
      <Link href="/storybook" asChild>
        <Button variant="tertiary" label="Go to Storybook"></Button>
      </Link>
      <Input placeholder="Email address" />
    </View>
  )
}

export { Home }
