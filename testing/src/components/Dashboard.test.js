import React from 'react';
import Display from './Display';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard>', () => {
  it('renders successfully', () => {
    render(<Dashboard />);
  });
});
