import * as React from 'react'
import Svg, { SvgProps, G, Mask, Path } from 'react-native-svg'

import { hs, vs } from '../utils/resize/resize'
const Project = (props: SvgProps) => (
  <Svg width={hs(24)} height={vs(24)} fill="none" viewBox="0 0 24 24" {...props}>
    <Path fill="#000" fillOpacity={0.01} d="M0 0h24v24H0z" />
    <Mask id="a" width={hs(24)} height={vs(24)} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#fff" d="M0 0h24v24H0z" />
    </Mask>
    <G stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} mask="url(#a)">
      <Path d="M15.716 16.223h-7.22M15.716 12.037h-7.22M11.252 7.86H8.497" opacity={0.4} />
      <Path
        d="M8.22 2.754c-2.76.017-4.47 1.833-4.47 4.603v9.196c0 2.784 1.723 4.607 4.507 4.607l7.689-.003c2.76-.017 4.47-1.834 4.47-4.604V7.357c0-2.784-1.723-4.607-4.507-4.607l-7.69.004Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
)
const ProjectActive = (props: SvgProps) => (
  <Svg width={hs(24)} height={vs(24)} fill="none" viewBox="0 0 24 24" {...props}>
    <Path fill="#000" fillOpacity={0.01} d="M0 0h24v24H0z" />
    <Mask id="a" width={hs(24)} height={vs(24)} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#fff" d="M0 0h24v24H0z" />
    </Mask>
    <G fill="#fff" mask="url(#a)">
      <Path
        d="M7.81 2C4.77 2 3 3.78 3 6.83v10.33C3 20.26 4.77 22 7.81 22h8.381C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2H7.81Z"
        opacity={0.4}
      />
      <Path
        fillRule="evenodd"
        d="M15.92 15.74c.399.04.7.38.7.79 0 .4-.301.74-.7.78H8.08c-.3.04-.59-.11-.75-.36a.795.795 0 0 1 .75-1.21h7.84Zm.78-3.78c0 .43-.35.78-.78.78H8.08a.78.78 0 0 1 0-1.56h7.84c.43 0 .78.35.78.78Zm-4.85-4.53c0 .44-.35.79-.781.79H8.08a.78.78 0 0 1 0-1.56v-.01h2.989c.431 0 .781.35.781.78Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
)
export { Project, ProjectActive }
