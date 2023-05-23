import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { useThemeColors } from "../../hooks/useThemeColors";



const moon = (props) => {
  
  const {colors} = useThemeColors();

  return (
  
<Svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} {...props}>
    <Path
      fill="none"
      stroke= {colors.moon}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
    />
  </Svg>
)}
export default moon