import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 168.29 168.29"
    style={{
      enableBackground: "new 0 0 168.29 168.29",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path d="M159.81 127.909a7.503 7.503 0 0 0-5.942-4.565c-24.423-3.241-45.44-19.364-54.848-42.078-9.409-22.715-5.95-48.978 9.028-68.539A7.5 7.5 0 0 0 103.081.732 84.728 84.728 0 0 0 92.005 0C80.957 0 70.152 2.155 59.889 6.406c-20.764 8.601-36.935 24.772-45.533 45.536-8.597 20.761-8.595 43.628.004 64.39 13.074 31.563 43.595 51.957 77.756 51.957h.001c11.051 0 21.872-2.161 32.164-6.424a84.105 84.105 0 0 0 34.553-26.528 7.496 7.496 0 0 0 .976-7.428zm-41.269 20.099c-8.463 3.505-17.353 5.283-26.424 5.282-28.073 0-53.155-16.76-63.899-42.698-7.067-17.061-7.068-35.852-.004-52.911C35.28 40.62 48.567 27.332 65.629 20.265c7.424-3.075 15.189-4.816 23.126-5.188-11.761 22.021-13.291 48.521-3.595 71.93 9.694 23.405 29.509 41.059 53.392 48.315a69.163 69.163 0 0 1-20.011 12.686z" />
  </Svg>
);

export default SvgComponent;
