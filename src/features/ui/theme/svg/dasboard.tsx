import * as React from 'react'
import Svg, { SvgProps, G, Mask, Use, Path } from 'react-native-svg'

import { hs, vs } from '../utils/resize/resize'
const Dashboard = (props: SvgProps) => (
  <Svg width={hs(24)} height={vs(24)} fill="none" viewBox="0 0 24 24" {...props}>
    <Path fill="#000" fillOpacity={0.01} d="M0 0h24v24H0z" />
    <Mask id="a" width={hs(24)} height={vs(24)} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#fff" d="M0 0h24v24H0z" />
    </Mask>
    <G
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipRule="evenodd"
      mask="url(#a)">
      <Path
        d="M19.552 2A2.46 2.46 0 0 1 22 4.47v3.294c0 1.363-1.096 2.47-2.448 2.47h-3.266a2.46 2.46 0 0 1-2.45-2.47V4.47A2.46 2.46 0 0 1 16.287 2h3.266Z"
        opacity={0.4}
      />
      <Path d="M7.714 2a2.46 2.46 0 0 1 2.45 2.47v3.294a2.46 2.46 0 0 1-2.45 2.47H4.45A2.46 2.46 0 0 1 2 7.764V4.47A2.46 2.46 0 0 1 4.449 2h3.265ZM7.714 13.766a2.46 2.46 0 0 1 2.45 2.47v3.294A2.46 2.46 0 0 1 7.713 22H4.45A2.46 2.46 0 0 1 2 19.53v-3.293a2.46 2.46 0 0 1 2.449-2.471h3.265ZM19.552 13.766c1.352 0 2.448 1.105 2.448 2.47v3.294A2.46 2.46 0 0 1 19.552 22h-3.266a2.46 2.46 0 0 1-2.45-2.47v-3.293a2.46 2.46 0 0 1 2.45-2.471h3.266Z" />
    </G>
  </Svg>
)
const DashboardActive = (props: SvgProps) => (
  <Svg width={hs(24)} height={vs(24)} fill="none" viewBox="0 0 24 24" {...props}>
    <Path fill="#000" fillOpacity={0.01} d="M0 0h24v24H0z" />
    <Mask id="a" width={hs(24)} height={vs(24)} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#fff" d="M0 0h24v24H0z" />
    </Mask>
    <G fill="#fff" mask="url(#a)">
      <Path
        d="M19.462 2A2.549 2.549 0 0 1 22 4.56v3.415a2.549 2.549 0 0 1-2.538 2.56h-3.386a2.549 2.549 0 0 1-2.539-2.56V4.56A2.549 2.549 0 0 1 16.076 2h3.386Z"
        opacity={0.4}
      />
      <Path
        fillRule="evenodd"
        d="M10.463 16.026v3.414A2.55 2.55 0 0 1 7.924 22H4.54A2.55 2.55 0 0 1 2 19.44v-3.415a2.549 2.549 0 0 1 2.539-2.56h3.385a2.549 2.549 0 0 1 2.539 2.56Zm11.537 0v3.414A2.55 2.55 0 0 1 19.462 22h-3.386a2.55 2.55 0 0 1-2.539-2.56v-3.415a2.549 2.549 0 0 1 2.539-2.56h3.386A2.549 2.549 0 0 1 22 16.026ZM10.463 4.56v3.415a2.549 2.549 0 0 1-2.539 2.56H4.54A2.549 2.549 0 0 1 2 7.974V4.56A2.549 2.549 0 0 1 4.539 2h3.385a2.549 2.549 0 0 1 2.539 2.56Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
)
export { DashboardActive, Dashboard }
