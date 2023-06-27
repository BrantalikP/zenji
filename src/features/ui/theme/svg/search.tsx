import * as React from 'react'
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg'

import { hs, vs } from '../utils/resize/resize'
const Search = (props: SvgProps) => (
  <Svg width={hs(24)} height={vs(24)} fill="none" viewBox="0 0 24 24" {...props}>
    <Path fill="#000" fillOpacity={0.01} d="M0 0h24v24H0z" />
    <Mask id="a" width={hs(24)} height={vs(24)} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#fff" d="M0 0h24v24H0z" />
    </Mask>
    <G stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} mask="url(#a)">
      <Path
        d="M11.767 20.755a8.989 8.989 0 1 1 0-17.978 8.989 8.989 0 0 1 0 17.977Z"
        clipRule="evenodd"
      />
      <Path d="M18.018 18.484 21.542 22" opacity={0.4} />
    </G>
  </Svg>
)
const SearchActive = (props: SvgProps) => (
  <Svg width={hs(24)} height={vs(24)} fill="#fff" viewBox="0 0 24 24" {...props}>
    <Path fill="#000" fillOpacity={0.01} d="M0 0h24v24H0z" />
    <Mask id="a" width={hs(24)} height={vs(24)} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#fff" d="M0 0h24v24H0z" />
    </Mask>
    <G stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} mask="url(#a)">
      <Path
        d="M11.767 20.755a8.989 8.989 0 1 1 0-17.978 8.989 8.989 0 0 1 0 17.977Z"
        clipRule="evenodd"
      />
      <Path d="M18.018 18.484 21.542 22" opacity={0.4} />
    </G>
  </Svg>
)
export { Search, SearchActive }
