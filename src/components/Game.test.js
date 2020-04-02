import React from 'react';
import { render } from '@testing-library/react';
import Game from './Game';

describe('Game', () => {
  test('renders without crashing', () => {
    const { container } = render(<Game />);
    expect(container).not.toBeEmpty();
  });
});