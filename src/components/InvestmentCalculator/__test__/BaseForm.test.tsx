import BaseForm from '../BaseForm';
import {render, screen} from '@testing-library/react';
import React from 'react';

describe('<BaseForm />', () => {
    it('should display all inputs', () => {
        const setData = jest.fn();

        render(<BaseForm setData={setData}/>);

        expect(screen.getByLabelText('Initial Amount')).toBeInTheDocument();
        expect(screen.getByLabelText('Years')).toBeInTheDocument();
        expect(screen.getByLabelText('Contribution Amount')).toBeInTheDocument();
        expect(screen.getByLabelText('Contribution Frequency')).toBeInTheDocument();
        expect(screen.getByLabelText('Interest')).toBeInTheDocument();
        expect(screen.getByLabelText('Compounding Frequency')).toBeInTheDocument();
    });
});