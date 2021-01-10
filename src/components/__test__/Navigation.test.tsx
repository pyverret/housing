import React from 'react';
import {render, screen, waitForElement} from '@testing-library/react'
import Navigation from '../Navigation';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';

test('Project Name', () => {
    render(<Navigation />);

    const header = screen.getByRole('heading');

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Something');
});

test('Menu Options', async () => {
    render(<Router><Navigation /></Router>);

    userEvent.click(screen.getByRole('button'));

    await waitForElement(() => screen.getByText('Home'));
    await waitForElement(() => screen.getByText('Investment Calculator'));
    await waitForElement(() => screen.getByText('Information'));
    await waitForElement(() => screen.getByText('Contact'));
});