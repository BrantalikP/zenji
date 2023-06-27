import * as React from 'react'
import Svg, { SvgProps, Path, Mask, G } from 'react-native-svg'

import { hs, vs } from '../utils/resize/resize'
const Notification = (props: SvgProps) => (
  <Svg width={hs(24)} height={vs(24)} fill="none" viewBox="0 0 24 24" {...props}>
    <Path fill="#000" fillOpacity={0.01} d="M0 0h24v24H0z" />
    <Mask id="a" width={hs(24)} height={vs(24)} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#fff" d="M0 0h24v24H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#000" fillOpacity={0.01} d="M0 0h24v24H0z" />
      <Mask id="b" width={hs(24)} height={vs(24)} x={0} y={0} maskUnits="userSpaceOnUse">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </Mask>
      <G
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        mask="url(#b)">
        <Path
          d="M3.5 13.568a3.6 3.6 0 0 1 .602-1.818 4.87 4.87 0 0 0 1.194-2.314c0-.666 0-1.342.058-2.009C5.654 4.218 8.827 2 11.96 2h.078c3.133 0 6.306 2.218 6.617 5.427.058.667 0 1.343.048 2.009a4.955 4.955 0 0 0 1.193 2.323c.365.538.573 1.164.602 1.81v.209c.022.87-.278 1.719-.844 2.39a4.505 4.505 0 0 1-2.853 1.37c-3.195.343-6.419.343-9.614 0a4.554 4.554 0 0 1-2.853-1.37 3.604 3.604 0 0 1-.834-2.38v-.22Z"
          clipRule="evenodd"
        />
        <Path
          d="M9.555 20.852a3.088 3.088 0 0 0 4.288.505c.196-.147.372-.316.524-.505"
          opacity={0.4}
        />
      </G>
    </G>
  </Svg>
)
const NotificationActive = (props: SvgProps) => (
  <Svg width={hs(24)} height={vs(24)} fill="none" viewBox="0 0 24 24" {...props}>
    <Path fill="#000" fillOpacity={0.01} d="M0 0h24v24H0z" />
    <Mask id="a" width={hs(24)} height={vs(24)} x={0} y={0} maskUnits="userSpaceOnUse">
      <Path fill="#fff" d="M0 0h24v24H0z" />
    </Mask>
    <G fill="#fff" mask="url(#a)">
      <Path d="M18.707 8.797V8.37c0-1.636-.377-2.69-1.195-3.745C16.248 2.987 14.124 2 12.044 2h-.088c-2.037 0-4.095.942-5.379 2.513-.864 1.075-1.284 2.175-1.284 3.857v.427c0 1.256-.31 1.995-1.063 2.848-.553.629-.73 1.437-.73 2.31 0 .876.287 1.705.864 2.379a4.532 4.532 0 0 0 2.9 1.413c1.571.179 3.142.246 4.737.246 1.593 0 3.164-.112 4.736-.246a4.532 4.532 0 0 0 2.9-1.413 3.614 3.614 0 0 0 .863-2.378c0-.874-.177-1.682-.73-2.31-.731-.854-1.063-1.593-1.063-2.849Z" />
      <Path
        d="M9.963 19.229c-.428.098-.89.328-.89.831.025.48.306.905.696 1.174h-.001a3.635 3.635 0 0 0 1.714.733c.33.045.666.043 1.008 0 .618-.09 1.21-.34 1.714-.732l-.001-.001c.39-.27.67-.693.695-1.174 0-.503-.462-.733-.89-.831-.5-.107-3.545-.107-4.045 0Z"
        opacity={0.4}
      />
    </G>
  </Svg>
)
export { Notification, NotificationActive }
