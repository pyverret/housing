import InvestmentCalculator from '../InvestmentCalculator';
import { render, screen } from '@testing-library/react'
import React from 'react';

// Mock SVG (getBBox) Not Supported in JSDOM
beforeEach(() => {
    // naive way to add SVGElement to window if it doesn't exist
    if (!window.SVGElement) {
      window.SVGElement = {};
    }
  
    window.SVGElement.prototype.getBBox = () => ({
        width: 0,
        height: 0,
        x: 0,
        y: 0
    });
  });

describe('<InvestmentCalculator />', () => {
    it('should display with title', () => {
        render(<InvestmentCalculator />);

        const title = screen.getByRole('heading', {name: 'Investment Calculator'});
        expect(title).toBeInTheDocument();
    });

    it('should have Basic Inputs', () => {
        render(<InvestmentCalculator />);

        expect(screen.getByLabelText('Initial Amount')).toBeInTheDocument();
        expect(screen.getByLabelText('Years')).toBeInTheDocument();
        expect(screen.getByLabelText('Contribution Amount')).toBeInTheDocument();
        expect(screen.getByLabelText('Contribution Frequency')).toBeInTheDocument();
        expect(screen.getByLabelText('Interest')).toBeInTheDocument();
        expect(screen.getByLabelText('Compounding Frequency')).toBeInTheDocument();
    });

    // TODO: Test Base Graph
});