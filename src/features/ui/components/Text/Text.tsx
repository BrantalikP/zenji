import React from 'react'
import { Text as RNText } from 'react-native'

export interface IText {}
const Text = (props: IText) => {
  return <RNText {...props} />
}

export { Text }
