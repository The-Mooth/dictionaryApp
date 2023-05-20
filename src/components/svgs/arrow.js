import * as React from "react"
import Svg, { Path } from "react-native-svg"
const arrow = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={14} height={8} {...props}>
    <Path fill="none" stroke="#A445ED" strokeWidth={1.5} d="m1 1 6 6 6-6" />
  </Svg>
)
export default arrow