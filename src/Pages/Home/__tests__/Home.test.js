import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';
import '@testing-library/jest-dom/extend-expect';

describe('Home', () => {
  test('render correctly', async () => {
    render(<Home />);

    const setting = screen.getByText('Bersatu melawan bullying!');
    expect(setting).toBeInTheDocument();
  });
});
