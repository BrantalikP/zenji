import { ComponentProps } from 'react'
import { Pressable } from 'react-native'

import { Icon } from '~/features/ui/theme/icons'

interface INavIconButton extends ComponentProps<typeof Pressable> {
  label: 'dashboard' | 'project' | 'notification' | 'search'
  isFocused: boolean
}

const icons = {
  dashboard: 'Dashboard',
  'dashboard-active': 'DashboardActive',
  projects: 'Project',
  'projects-active': 'ProjectActive',
  notifications: 'Notification',
  'notifications-active': 'NotificationActive',
  search: 'Search',
  'search-active': 'SearchActive',
} as const

const NavIconButton = ({ label, ...pressableProps }: INavIconButton) => {
  const { isFocused, testID } = pressableProps
  const iconName = icons[`${label}${isFocused ? '-active' : ''}`]

  return (
    <Pressable {...pressableProps} hitSlop={20}>
      <Icon name={iconName} />
    </Pressable>
  )
}

export { NavIconButton }
