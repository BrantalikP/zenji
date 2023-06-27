import React from 'react'
import { View } from 'react-native'

import { AddButton } from './components/AddButton/AddButton'
import { NavIconButton } from './components/NavIconButton'
import { styles } from './styles'

import { useStyles } from '~/features/ui/theme/hooks/useStyles'

const CustomBottomTabBar = ({ state, descriptors, navigation }) => {
  const { container } = useStyles(styles)
  return (
    <View style={container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true })
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <React.Fragment key={route.key}>
            {index === 2 && <AddButton />}
            <NavIconButton
              label={label}
              isFocused={isFocused}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={`tab-${label}`}
              onPress={onPress}
              onLongPress={onLongPress}
            />
          </React.Fragment>
        )
      })}
    </View>
  )
}

export { CustomBottomTabBar }
