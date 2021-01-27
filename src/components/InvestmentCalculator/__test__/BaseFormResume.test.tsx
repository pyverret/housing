import BaseFormResume from '../BaseFormResume';
import {render, screen} from '@testing-library/react';
import React from 'react';

describe('<BaseFormResume />', () => {
    it('should display all inputs', () => {
        render(<BaseFormResume lastPeriod={{}}/>);

        console.log(screen.debug());

        expect(screen.getByText(/On day zero, the investment is/i)).toBeInTheDocument();
        expect(screen.getByText(/of interest will be apply for/i)).toBeInTheDocument();
        expect(screen.getByText(/The interest will be compounded each/i)).toBeInTheDocument();
        expect(screen.getByText(/The initial amount was/i)).toBeInTheDocument();
        expect(screen.getByText(/The interest generated is/i)).toBeInTheDocument();
        expect(screen.getByText(/The total of your contribution and interest is/i)).toBeInTheDocument();
    });
});