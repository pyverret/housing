import {TextField, InputLabel, MenuItem, Select, FormControl} from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import {generateCompoundingInterest} from '../../utils/compound';
import {Frequency} from '../../enums/frequencies';

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
export default function InvestmentCalculator({setData}): JSX.Element {
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
Base Information
        <div>
            <TextField id="initial-amount" label="Initial Amount" type="number" defaultValue={initial} onChange={(event) => setInitial(parseInt(event.target.value))} fullWidth/>
        </div>
        <div>
            <TextField id="years" label="Years" type="number" defaultValue={years} onChange={(event) => setYears(parseInt(event.target.value))} fullWidth/>
        </div>
contribution
        <div>
            <TextField id="contribution-amount" label="Contribution Amount" type="number" defaultValue={contribution} onChange={(event) => setContribution(parseInt(event.target.value))} />
        </div>
        <div>
            <FormControl>
                <InputLabel id="contribution-frequency">Contribution Frequency</InputLabel>
                <Select
                    labelId="contribution-frequency"
                    id="contribution-frequency"
                    value={contributionFrequency}
                    onChange={(event: React.ChangeEvent<{ value: any }>) => setContributionFrequency(parseInt(event.target.value))}
                    style={{width: '225px'}}
                >
                    {contributionFrequencies.map((frequency) => <MenuItem value={frequency} key={`contribution-${frequency}`} data-testid="contribution-frequency">{Frequency[frequency]}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
Compounding
        <div>
            <TextField id="interest" label="Interest" type="number" defaultValue={interest} onChange={(event) => setInterest(parseInt(event.target.value))} fullWidth/>
        </div>
        <div>
            <FormControl>
                <InputLabel id="compounding-frequency">Compounding Frequency</InputLabel>
                <Select
                    labelId="compounding-frequency"
                    id="compounding-frequency"
                    value={compoundingFrequency}
                    onChange={(event: React.ChangeEvent<{ value: any }>) => setCompoundingFrequency(parseInt(event.target.value))}
                    style={{width: '225px'}}
                >
                    {compoundingFrequencies.map((frequency) => <MenuItem value={frequency} key={`compounding-${frequency}`} data-testid="compounding-frequency">{Frequency[frequency]}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    </form>;
}