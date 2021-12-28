import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg viewBox="0 0 48 48" {...props}>
    <Path d="m13 8-7 6 7 7" stroke={props.color} strokeWidth={4} />
    <Path
      d="M6 14h22.994c6.883 0 12.728 5.62 12.996 12.5.284 7.27-5.723 13.5-12.996 13.5H11.998"
      stroke={props.color}
      strokeWidth={4}
    />
  </Svg>
);

export default SvgComponent;
