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

    // it('Page Should Display With Title', () => {
    //     render(<InvestmentCalculator />);

    //     const title = screen.getByRole('heading');

    //     expect(title).toBeInTheDocument();
    //     expect(title).toHaveTextContent('Investment Calculator');
    // });
    // it('Page Should Display', () => {
    //     render(<InvestmentCalculator />);

    //     // const title = screen.getByRole('heading'); 
    //     const title = screen.getByText('Investment Calculator'); 

    //     expect(title).toBeInTheDocument();
    //     // expect(title).toHaveTextContent('Investment Calculator');
    // });

    // it('Initial Amount should be displayed', () => {
    //     render(<InvestmentCalculator />);

    //     expect(screen.getByLabelText('Initial Amount')).toBeInTheDocument();        
    // });

    // it('Years Input should be displayed', () => {
    //     render(<InvestmentCalculator />);

    //     expect(screen.getByLabelText('Years')).toBeInTheDocument();        
    // });

    // it('Compounding Frequency Input should be displayed', () => {
    //     render(<InvestmentCalculator />);

    //     expect(screen.getByLabelText('Compounding Frequency')).toBeInTheDocument();      
    //     // TODO: Add test for list instead of rendered options
    // });

    // it('Interest Input should be displayed', () => {
    //     render(<InvestmentCalculator />);

    //     expect(screen.getByLabelText('Interest')).toBeInTheDocument();        
    // });

    // it('Contribution Amount Input should be displayed', () => {
    //     render(<InvestmentCalculator />);

    //     expect(screen.getByLabelText('Contribution Amount')).toBeInTheDocument();
    // });

    // it('Contribution Frequency Input should be displayed with options', () => {
    //     render(<InvestmentCalculator />);
        
    //     expect(screen.getByLabelText('Contribution Frequency')).toBeInTheDocument();
    //     // TODO: Add test for list instead of rendered options
    // });
});