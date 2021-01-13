import Home from '../Home';
import { render, screen } from '@testing-library/react'
import React from 'react';

describe('<Home />', () => {
    it('Page Should Display', () => {
        render(<Home />);

        const title = screen.getByRole('heading'); 

        // TODO: Add the chaining option
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Home');
    });
});