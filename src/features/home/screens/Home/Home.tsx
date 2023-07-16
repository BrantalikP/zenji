import { ZodiosHooks } from '@zodios/react'
import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

import { apiHooks } from '~/features/api/wanikani/schema/zodios-client'
import { Text } from '~/features/ui/components/Text'
import { fontsStyles } from '~/features/ui/theme/fontsStyles'
import { useStyles } from '~/features/ui/theme/hooks/useStyles'
const Home = () => {
  const { container } = useStyles(styles)

  const { data } = apiHooks.useGetUser()
  return (
    <View style={container}>
      <Text>Home</Text>
      <Text style={{ ...fontsStyles.h0 }}>Header</Text>
      <Text style={{ ...fontsStyles.body }}>body</Text>
      <Text style={{ ...fontsStyles.bodySmallBold }}>body</Text>
    </View>
  )
}

export { Home }
