import BaseForm from '../BaseForm';
import {render, screen} from '@testing-library/react';
import React from 'react';

describe('<BaseForm />', () => {
    it('should display all inputs', () => {
        const setData = jest.fn();

        render(<BaseForm setData={setData}/>);

        expect(screen.getByLabelText('Initial Investment')).toBeInTheDocument();
        expect(screen.getByLabelText('Years to grow')).toBeInTheDocument();
        expect(screen.getByLabelText('Additional Contribution')).toBeInTheDocument();
        expect(screen.getByTestId('contribution-frequency')).toBeInTheDocument();
        expect(screen.getByLabelText('Return rate')).toBeInTheDocument();
        expect(screen.getByTestId('compounding-frequency')).toBeInTheDocument();
    });
});