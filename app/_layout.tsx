import { Stack } from 'expo-router'
import React from 'react'

import { Provider } from '~/provider'

const RootStack = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  )
}

export default () => (
  <Provider>
    <RootStack />
  </Provider>
)
