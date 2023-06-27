import { renderHook } from '@testing-library/react-hooks'

import { useStyles } from './index'
import { defaultTheme } from '../../themes'
import { hs } from '../../utils/resize/resize'

import { MakeStylesProps } from '~/types'

const mockStyles: MakeStylesProps<'container' | 'title'> = (theme) => ({
  container: {
    backgroundColor: theme.colors.background1,
    paddingLeft: 12,
  },
  title: {
    marginBottom: 15,
  },
})

test('should return valid styles', () => {
  const { result } = renderHook(() => useStyles(mockStyles))

  expect(result.current.container.backgroundColor).toBe(defaultTheme.colors.background1)
  expect(result.current.container.paddingLeft).toBe(hs(12))
  expect(result.current.container.paddingLeft).not.toBe(15)
})
