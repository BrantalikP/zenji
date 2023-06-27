import { Tabs } from 'expo-router'

import { CustomBottomTabBar } from '~/features/navigation/BottomTabBar'

export default () => (
  <Tabs
    tabBar={(props) => <CustomBottomTabBar {...props} />}
    screenOptions={{
      headerShown: false,
    }}>
    <Tabs.Screen name="dashboard" />
    <Tabs.Screen name="projects" />
    <Tabs.Screen name="notifications" />
    <Tabs.Screen name="search" />
  </Tabs>
)
