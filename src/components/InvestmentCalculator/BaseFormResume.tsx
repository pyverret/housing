import React from 'react';
import {Alert} from '@material-ui/lab';

type Period = {
    id: number,
    currentInvestment: number,
    totalInvestment: number,
    currentInterest: number,
    totalInterest: number,
    totalValue: number,
    currentRatio: number,
    totalRatio: number
};

type Props = {
    initialAmount: number,
    years: number,
    contributionFrequency: number,
    compoundingFrequency: number,
    interest: number,
    contributionAmount: number,
    lastPeriod: Period
};

export default function BaseFormResume({
    initialAmount,
    years,
    contributionFrequency,
    compoundingFrequency,
    interest,
    contributionAmount,
    lastPeriod
}: Props): JSX.Element {
    return <Alert icon={false} severity="info">
        <p>On day zero, the investment is <strong>${initialAmount}</strong>, the amount of <strong>${contributionAmount}</strong> will be injected each <strong>{contributionFrequency}</strong>.</p>
        <p><strong>{interest}%</strong> of interest will be apply for <strong>{years}</strong> years.</p>
        <p>The interest will be compounded each <strong>{compoundingFrequency}</strong>.</p>
        <p>The initial amount was <strong>${initialAmount}</strong> and the additional contribution were <strong>${lastPeriod.totalInvestment-initialAmount}</strong> for a total of <strong>${lastPeriod.totalInvestment}</strong>.</p>
        <p>The interest generated is <strong>${lastPeriod.totalInterest}</strong>.</p>
        <p>The total of your contribution and interest is <strong>${lastPeriod.totalValue}</strong>.</p>
    </Alert>;
}