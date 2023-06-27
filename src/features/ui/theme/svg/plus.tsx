import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

import { hs, vs } from '../utils/resize/resize'
const Plus = (props: SvgProps) => (
  <Svg width={hs(10)} height={vs(10)} fill="none" viewBox="0 0 10 10" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M5.698 1.583 5.69 1.49a.698.698 0 0 0-1.389.094v2.71H1.59l-.094.007a.698.698 0 0 0 .094 1.389h2.713v2.71l.007.094A.698.698 0 0 0 5.698 8.4v-2.71H8.41l.095-.007a.698.698 0 0 0-.095-1.389H5.698v-2.71Z"
      clipRule="evenodd"
    />
  </Svg>
)
export { Plus }
