import { TouchableOpacity } from 'react-native'

import { styles } from './styles'

import { useStyles } from '~/features/ui/theme/hooks/useStyles'
import { Icon } from '~/features/ui/theme/icons'

const AddButton = () => {
  const { container } = useStyles(styles)
  return (
    <TouchableOpacity style={container}>
      <Icon name="Plus" />
    </TouchableOpacity>
  )
}

export { AddButton }
