import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { SvgProps } from './types';

const ChevronLeft: React.FC<SvgProps> = ({ color = '#323232', ...props }) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14 16L10 12L14 8"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ChevronLeft;
