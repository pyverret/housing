import React from 'react';
import {Alert} from '@material-ui/lab';

type Inputs = {
    initialAmount: number,
    years: number,
    contributionFrequency: number,
    compoundingFrequency: number,
    interest: number,
    contributionAmount: number
}

type Props = Inputs;

export default function BaseFormResume({
    initialAmount,
    years,
    contributionFrequency,
    compoundingFrequency,
    interest,
    contributionAmount
}: Props): JSX.Element {

    return <Alert icon={false} severity="info">
        <p>On day zero, the investment is <strong>${initialAmount}</strong>, the amount of <strong>${contributionAmount}</strong> will be injected each <strong>{contributionFrequency}</strong>.</p>
        <p><strong>{interest}%</strong> of interest will be apply for <strong>{years}</strong> years.</p>
        <p>The interest will be compounded each <strong>{compoundingFrequency}</strong>.</p>
        <p>TODO: The initial amount was XXXX and the additional contribution are XXXX for a total of XXXX.</p>
        <p>TODO: The interest generated is $ XXXX.</p>
        <p>TODO: The total of your contribution and interest is XXXX.</p>
    </Alert>;
}