import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { SvgProps } from './types';

const ChevronDown: React.FC<SvgProps> = ({ color = '#323232', ...props }) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="m8 10 4 4 4-4"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ChevronDown;
