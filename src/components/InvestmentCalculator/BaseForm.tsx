import {TextField, InputLabel, MenuItem, Select, FormControl} from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import {generateCompoundingInterest} from '../../utils/compound';
import {Frequency} from '../../enums/frequencies';

type Props = {
    setData: (object) => void
}

const contributionFrequencies = [
    Frequency.annually,
    Frequency.semiAnnually,
    Frequency.quarterly,
    Frequency.monthly,
    Frequency.biWeekly,
    Frequency.weekly
];

const compoundingFrequencies = [
    Frequency.annually,
    Frequency.semiAnnually,
    Frequency.quarterly,
    Frequency.monthly,
];

export default function InvestmentCalculator({setData}: Props): JSX.Element {
    const [initial, setInitial] = useState(0);
    const [years, setYears] = useState(10);
    const [compoundingFrequency, setCompoundingFrequency] = useState<number>(Frequency.monthly);
    const [interest, setInterest] = useState(6);
    const [contribution, setContribution] = useState(100);
    const [contributionFrequency, setContributionFrequency] = useState<number>(Frequency.weekly);

    useEffect(() => {
        const inputs = {
            initialAmount: initial,
            years,
            contributionFrequency,
            compoundingFrequency,
            interest,
            contributionAmount: contribution
        };

        setData(generateCompoundingInterest(inputs));
    }, [initial, years, compoundingFrequency, interest, contribution, contributionFrequency, setData]);

    return <form action="">
        <TextField 
            id="initial-investment"
            label="Initial Investment"
            type="number"
            defaultValue={initial}
            onChange={(event) => setInitial(parseInt(event.target.value))}
            fullWidth/>
        <TextField id="years" label="Years to grow" type="number" defaultValue={years} onChange={(event) => setYears(parseInt(event.target.value))} fullWidth/>
        <TextField id="contribution-amount" label="Additional Contribution" type="number" defaultValue={contribution} onChange={(event) => setContribution(parseInt(event.target.value))} />
        <FormControl>
            <InputLabel id="contribution-frequency">Frequency</InputLabel>
            <Select
                labelId="contribution-frequency"
                id="contribution-frequency"
                value={contributionFrequency}
                onChange={(event: React.ChangeEvent<{ value: any }>) => setContributionFrequency(parseInt(event.target.value))}
                data-testid='contribution-frequency'
            >
                {contributionFrequencies.map((frequency) => <MenuItem value={frequency} key={`contribution-${frequency}`} data-testid="contribution-frequency">{Frequency[frequency]}</MenuItem>)}
            </Select>
        </FormControl>
        <TextField id="interest" label="Return rate" type="number" defaultValue={interest} onChange={(event) => setInterest(parseInt(event.target.value))} />
        <FormControl>
            <InputLabel id="compounding-frequency">Frequency</InputLabel>
            <Select
                labelId="compounding-frequency"
                id="compounding-frequency"
                value={compoundingFrequency}
                onChange={(event: React.ChangeEvent<{ value: any }>) => setCompoundingFrequency(parseInt(event.target.value))}
                data-testid='compounding-frequency'
            >
                {compoundingFrequencies.map((frequency) => <MenuItem value={frequency} key={`compounding-${frequency}`} data-testid="compounding-frequency">{Frequency[frequency]}</MenuItem>)}
            </Select>
        </FormControl>
    </form>;
}