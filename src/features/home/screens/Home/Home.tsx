import { useStyles, useTheme } from '@brantalikp/rn-resize'
import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { styles } from './styles'
import { LessonAndReview } from '../../components/LessonAndReview'
import { useUser } from '../../hook/useUser'

import { Text } from '~/components'
import { StorybookButton } from '~/components/StorybookButton'
import { Theme, defaultTheme } from '~/features/ui/theme/themes'
const Home = () => {
  const { container } = useStyles(styles)
  const insets = useSafeAreaInsets()
  const { theme } = useTheme<Theme>()
  const { user } = useUser()

  const SPACING_TOP = theme?.spacing?.['3xl'] ?? defaultTheme.spacing['3xl'] + insets.top

  return (
    <View style={[container, { paddingTop: SPACING_TOP }]}>
      <Text variant="h4">{`Welcome ${user?.username}`}</Text>
      <LessonAndReview />
      <StorybookButton />
    </View>
  )
}

export { Home }
