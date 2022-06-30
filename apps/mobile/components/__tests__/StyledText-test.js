import * as React from 'react';
import { Text, View } from 'react-native';
import { render} from '@testing-library/react-native';

it(`renders correctly`, () => {
  const { getByText } = render(<View><Text>Test Text</Text></View>)

  expect(getByText('Test Text')).toBeDefined();
});
