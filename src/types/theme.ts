import { ImageStyle, TextStyle, ViewStyle } from 'react-native'

import { Theme } from '~/features/ui/theme/themes'

export type StyleProp = ViewStyle & TextStyle & ImageStyle
export type CustomStyles = Record<string, StyleProp>

export type MakeStylesProps<T extends string> = (theme: Theme) => Record<T, StyleProp>
