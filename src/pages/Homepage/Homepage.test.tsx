import React from 'react';
import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';

import Homepage from './index';

describe('Homepage', () => {
  it('hides second input as long as first one is not filled with data', async () => {
    render(<Homepage />);
    const destinationInput = screen.queryByPlaceholderText(/cel podróży/i);
    const firstInput = screen.getByPlaceholderText(/Początkowa lokalizacja/i);
    expect(destinationInput).not.toBeInTheDocument();

    userEvent.type(firstInput, 'Brzeg');
    userEvent.click(await screen.findByText(/opolskie/i));

    screen.getByPlaceholderText(/cel podróży/i);
  });

  it('renders button only when inputs are filled with data', async () => {
    render(<Homepage />);
    const startingLocationInput = screen.getByPlaceholderText(
      /Początkowa lokalizacja/i
    );

    expect(screen.queryByText(/Wyznacz trasę/i)).not.toBeInTheDocument();

    userEvent.type(startingLocationInput, 'Brzeg');
    userEvent.click(await screen.findByText(/opolskie/i));
    userEvent.type(screen.getByPlaceholderText(/cel podróży/i), 'Paryż');
    userEvent.click(await screen.findByText(/Paris/i));

    screen.queryByText(/Wyznacz trasę/i);
  });
});


