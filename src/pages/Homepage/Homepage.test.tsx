import React from 'react';
import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';

import Homepage from './index';

describe('Homepage', () => {
  it('hides second input as long as first one is not filled with data', async () => {
    render(<Homepage />);
    const destinationInput = screen.queryByPlaceholderText(/Destination/i);
    const firstInput = screen.getByPlaceholderText(/Starting location/i);
    expect(destinationInput).not.toBeInTheDocument();

    userEvent.type(firstInput, 'Brzeg');
    userEvent.click(await screen.findByText(/opolskie/i));

    screen.getByPlaceholderText(/Destination/i);
  });

  it('renders button only when inputs are filled with data', async () => {
    render(<Homepage />);
    const startingLocationInput =
      screen.getByPlaceholderText(/Starting location/i);

    expect(screen.queryByText(/Generate the way/i)).not.toBeInTheDocument();

    userEvent.type(startingLocationInput, 'Brzeg');
    userEvent.click(await screen.findByText(/opolskie/i));
    userEvent.type(screen.getByPlaceholderText(/Destination/i), 'Paryż');
    userEvent.click(await screen.findByText(/Paris/i));

    screen.queryByText(/Generate the way/i);
  });
});


