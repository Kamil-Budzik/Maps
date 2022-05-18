import React from 'react';
import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';

import Sidebar from './index';

//TODO this test will be updated after adding error handling;
// at this moment app shows alert 'Wypełnij powyższe dane' even if inputs are filled with data
// This is because this alert shows when leaflet data is empty, after page refresh

describe('Sidebar', () => {
  it('hides pdf button as long as inputs are empty', () => {
    render(<Sidebar handlePrint={() => null} />);

    screen.getByText(/Wypełnij powyższe dane/i);
    expect(screen.queryByText(/dowload pdf/i)).not.toBeInTheDocument();

    userEvent.type(screen.getByLabelText('fuelUsage'), '6.6');
    userEvent.type(screen.getByLabelText('fuelPrice'), '7.2');

    screen.getByText(/dowload pdf/i);
  });
  // it('hides trip summary as long as inputs are empty', async () => {
  //   render(<Sidebar handlePrint={() => null} />);
  //
  //   screen.getByText(/Wypełnij powyższe dane/i);
  //   expect(screen.queryByText(/Ilość km/i)).not.toBeInTheDocument();
  //   expect(screen.queryByText(/Całkowity koszt/i)).not.toBeInTheDocument();
  //
  //   userEvent.type(screen.getByLabelText('fuelUsage'), '6.6');
  //   userEvent.type(screen.getByLabelText('fuelPrice'), '7.2');
  //
  //   await screen.findByText(/Ilość km/i);
  //   await screen.findByText(/Całkowity koszt/i);
  // });
}); 

 
