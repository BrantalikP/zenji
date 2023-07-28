---
to: src/features/<%= feature %>/<%= category %>/<%= name %>/<%= name %>.tsx
---
<%
  ComponentName = h.changeCase.pascal(name)
  PropsInterface = 'I' + ComponentName
%>
import type { FC } from 'react'
import { View } from 'react-native'
import { Text } from '~/features/ui/components/Text'

export interface <%= PropsInterface %> {
  // TODO: define props
}

const <%= ComponentName %>: FC<<%= PropsInterface %>> = (props) => {
  return (
    <View {...props}>
      <Text><%= ComponentName %></Text>
    </View>
  )
}

export { <%= ComponentName %> }
