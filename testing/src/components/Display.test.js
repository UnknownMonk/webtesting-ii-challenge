import React from 'react';
import Display from './Display';
import { render, getByText } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('<Display/>', () => {
  it('should render the display component', () => {
    render(<Display />);
    const testState = {
      balls: 0,
      strikes: 0
    };
    const { getByTestId } = render(<Display atBat={testState} />);

    const balls = getByTestId(/balls/i);
    const strikes = getByTestId(/strikes/i);

    expect(balls).toHaveTextContent(/Balls/i);
    expect(strikes).toHaveTextContent(/Strikes/i);
  });
});
