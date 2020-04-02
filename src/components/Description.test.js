import React from 'react';
import { render } from '@testing-library/react';
import Description from './Description';

describe('Description', () => {
  test('renders without crashing', () => {
    const { container } = render(<Description />);
    expect(container).not.toBeEmpty();
  });
});