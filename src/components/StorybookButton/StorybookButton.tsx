import { useStyles } from '@brantalikp/rn-resize'
import { Link } from 'expo-router'
import type { FC } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { styles } from './styles'

import { Icon } from '~/features/ui/theme/icons'

const StorybookButton: FC = () => {
  const { container } = useStyles(styles)
  return (
    <View style={container}>
      <Link href="/storybook" asChild>
        <TouchableOpacity>
          <Icon name="Storybook" />
        </TouchableOpacity>
      </Link>
    </View>
  )
}

export { StorybookButton }
