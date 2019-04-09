import React from 'react';
import Display from './Display';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('<Display>', () => {
  it('renders successfully', () => {
    render(<Display />);
  });
  it('increments strikes by 1 if less than 3', () => {
    const { getByText } = render(<Dashboard />);
    const strikeButton = getByText('strike');

    fireEvent.click(strikeButton);
    expect(getByText(/strikes: 1/i)).toBeInTheDocument();
  });

  it('should display strikes', () => {
    const { getByText } = render(<Display />);

    getByText(/strikes/i);
  });

  it('should display balls', () => {
    const { getByText } = render(<Display />);

    getByText(/balls/i);
  });
});
