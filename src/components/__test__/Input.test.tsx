import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import * as faker from 'faker';
import Input from '../Input';

const name: string = faker.random.word();
const text: string = faker.random.words();
const defaultValue: number = faker.random.number();
const detailsDefault: object = {
    defaultValue,
    name,
    text,
    type: 'number',
};
const valuesDefault: object = {[name]: defaultValue};

function renderInput() {
    render(<Input details={detailsDefault} values={valuesDefault} />);
    const label = screen.getByText(text);
    const input = screen.getByLabelText(text);

    return {label, input};
}

test('Render Input Component', () => {
    const {label, input} = renderInput();

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(defaultValue);
    expect(input).toHaveAttribute('name', name);
    expect(input).toHaveAttribute('id', name);
});