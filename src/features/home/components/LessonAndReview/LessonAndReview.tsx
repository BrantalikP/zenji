import { useStyles } from '@brantalikp/rn-resize'
import type { FC } from 'react'
import { View } from 'react-native'

import { styles } from './styles'
import { SelectTile } from '../parts/SelectTile'

import { Text } from '~/components'

export interface ILessonAndReview {
  // TODO: define props
}

const LessonAndReview: FC<ILessonAndReview> = () => {
  const { container } = useStyles(styles)
  return (
    <View style={container}>
      <SelectTile />
      <SelectTile />
    </View>
  )
}

export { LessonAndReview }
