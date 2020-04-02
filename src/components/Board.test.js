import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';

describe('Board', () => {
  test('renders without crashing', () => {
    const { container } = render(<Board />);
    expect(container).not.toBeEmpty();
  });
});