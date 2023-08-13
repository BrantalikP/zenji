import { useStyles } from '@brantalikp/rn-resize'
import { Link } from 'expo-router'
import type { FC } from 'react'
import { View } from 'react-native'

import { styles } from './styles'

import { Button, Text } from '~/components'

export interface IWelcome {
  // TODO: define props
}

const Welcome: FC<IWelcome> = () => {
  const { container } = useStyles(styles)
  return (
    <View style={container}>
      <Text>Welcome</Text>
      <Link href="/storybook" asChild>
        <Button variant="tertiary" label="Go to Storybook"></Button>
      </Link>
      <Button label="Get Started" onPress={() => console.log('test')} />
    </View>
  )
}

export { Welcome }
