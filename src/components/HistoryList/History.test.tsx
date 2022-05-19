import React from 'react';
import { render, screen } from 'test-utils';

import HistoryList from './index';

describe('HistoryList', () => {
  it('renders message when there are no saved trips', () => {
    render(<HistoryList />);

    screen.getByText(/Twoja historia jest pusta/i);
  });
});


