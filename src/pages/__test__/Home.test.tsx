import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import * as faker from 'faker';
import {common, investment, ownership, rent} from '../../utils/inputs';
import Home from '../Home';

function renderHome() {
    render(<Home />);
}

function getInputComponent(text: string) {
    const label = screen.getByText(text);
    const input = screen.getByLabelText(text);

    return {label, input};
}

function expectInput(text: string) {
    const {label, input} = getInputComponent(text);

    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
}

test('Home is rendered', () => {
    renderHome();

    expect(screen.getByText('Home')).toBeInTheDocument();
});

test('General Inputs Rendered', () => {
    renderHome();

    expectInput(common.duration.text);
});

test('General Input Update', () => {
    renderHome();

    const newValue: string = faker.random.number().toString();

    const {input} = getInputComponent(common.duration.text);

    fireEvent.change(input, {target: {value: newValue}});

    expect(input).toHaveValue(Number(newValue));
});

test('Rents Inputs Rendered', () => {
    renderHome();

    expectInput(investment.amount.text);
    expectInput(investment.growth.text);
    expectInput(rent.increase.text);
    expectInput(rent.monthly.text);
});

test('Rents Input Update', () => {
    renderHome();

    const newAmountValue: string = faker.random.number().toString();
    const newGrowthValue: string = faker.random.number().toString();
    const newIncreaseValue: string = faker.random.number().toString();
    const newMonthlyValue: string = faker.random.number().toString();

    const amount = getInputComponent(investment.amount.text);
    const growth = getInputComponent(investment.growth.text);
    const increase = getInputComponent(rent.increase.text);
    const monthly = getInputComponent(rent.monthly.text);

    fireEvent.change(amount.input, {target: {value: newAmountValue}});
    fireEvent.change(growth.input, {target: {value: newGrowthValue}});
    fireEvent.change(increase.input, {target: {value: newIncreaseValue}});
    fireEvent.change(monthly.input, {target: {value: newMonthlyValue}});

    expect(amount.input).toHaveValue(Number(newAmountValue));
    expect(growth.input).toHaveValue(Number(newGrowthValue));
    expect(increase.input).toHaveValue(Number(newIncreaseValue));
    expect(monthly.input).toHaveValue(Number(newMonthlyValue));
});

test('Ownership Input Rendered', () => {
    renderHome();

    expectInput(ownership.amortization.text);
    expectInput(ownership.appreciation.text);
    expectInput(ownership.down.text);
    expectInput(ownership.fees.text);
    expectInput(ownership.payment.text);
    expectInput(ownership.taxes.text);
    expectInput(ownership.value.text);
});

test('General Input Update', () => {
    renderHome();

    const newAmortizationValue: string = faker.random.number().toString();
    const newAppreciationValue: string = faker.random.number().toString();
    const newDownValue: string = faker.random.number().toString();
    const newFeesValue: string = faker.random.number().toString();
    const newPaymentValue: string = faker.random.number().toString();
    const newTaxesValue: string = faker.random.number().toString();
    const newHouseValue: string = faker.random.number().toString();

    const amortization = getInputComponent(ownership.amortization.text);
    const appreciation = getInputComponent(ownership.appreciation.text);
    const down = getInputComponent(ownership.down.text);
    const fees = getInputComponent(ownership.fees.text);
    const payment = getInputComponent(ownership.payment.text);
    const taxes = getInputComponent(ownership.taxes.text);
    const houseValue = getInputComponent(ownership.value.text);

    fireEvent.change(amortization.input, {target: {value: newAmortizationValue}});
    fireEvent.change(appreciation.input, {target: {value: newAppreciationValue}});
    fireEvent.change(down.input, {target: {value: newDownValue}});
    fireEvent.change(fees.input, {target: {value: newFeesValue}});
    fireEvent.change(payment.input, {target: {value: newPaymentValue}});
    fireEvent.change(taxes.input, {target: {value: newTaxesValue}});
    fireEvent.change(houseValue.input, {target: {value: newHouseValue}});

    expect(amortization.input).toHaveValue(Number(newAmortizationValue));
    expect(appreciation.input).toHaveValue(Number(newAppreciationValue));
    expect(down.input).toHaveValue(Number(newDownValue));
    expect(fees.input).toHaveValue(Number(newFeesValue));
    expect(payment.input).toHaveValue(Number(newPaymentValue));
    expect(taxes.input).toHaveValue(Number(newTaxesValue));
    expect(houseValue.input).toHaveValue(Number(newHouseValue));
});