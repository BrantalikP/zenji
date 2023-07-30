---
to: src/features/<%= feature %>/<%= category %>/<%= name %>/<%= name %>.tsx
---
<%
  ComponentName = h.changeCase.pascal(name)
  PropsInterface = 'I' + ComponentName
%>
import { useStyles } from '@brantalikp/rn-resize'
import type { FC } from 'react'
import { View } from 'react-native'

import { styles } from './styles'

import { Text } from '~/features/ui/components/Text'

export interface <%= PropsInterface %> {
  // TODO: define props
}

const <%= ComponentName %>: FC<<%= PropsInterface %>> = () => {
  const { container } = useStyles(styles)
  return (
    <View style={container}>
      <Text><%= ComponentName %></Text>
    </View>
  )
}

export { <%= ComponentName %> }
