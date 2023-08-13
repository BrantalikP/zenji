import type { SvgProps } from 'react-native-svg'

import { DashboardActive, Dashboard } from './svg/dasboard'
import { Notification, NotificationActive } from './svg/notification'
import { Plus } from './svg/plus'
import { Project, ProjectActive } from './svg/project'
import { Search, SearchActive } from './svg/search'
import { Storybook } from './svg/storybook'
import { hs, vs } from './utils/resize/resize'

const iconsMap = {
  DashboardActive,
  Dashboard,
  Project,
  ProjectActive,
  Notification,
  NotificationActive,
  Plus,
  Search,
  SearchActive,
  Storybook,
} as const

export type IconsType = keyof typeof iconsMap

interface IProps extends SvgProps {
  name: IconsType
  // when height and width are equal
  size?: number
  testID?: string
}

export type IconProps = IProps

export const Icon = ({ name, width, height, size, ...rest }: IconProps) => {
  const IconComponent = iconsMap[name]

  if (!IconComponent) return null

  return (
    <IconComponent
      {...(size || width ? { width: hs(Number(size ?? width)) } : {})}
      {...(size || height ? { height: vs(Number(size ?? height)) } : {})}
      {...rest}
    />
  )
}
