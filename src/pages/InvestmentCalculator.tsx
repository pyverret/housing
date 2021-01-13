import { Frequency } from '../enums/frequencies';
import React, {useState, useEffect} from 'react';
import {generateCompoundingInterest} from '../utils/compound';
import { DataGrid, ColDef } from '@material-ui/data-grid';
import { Chart, ArgumentAxis, ValueAxis, AreaSeries, Title, Legend } from '@devexpress/dx-react-chart-material-ui';
import { Stack } from '@devexpress/dx-react-chart';
import { TextField, InputLabel, MenuItem, Select, FormControl, Typography } from '@material-ui/core';

type Period = {
    id: number,
    currentInvestment: number,
    totalInvestment: number,
    currentInterest: number,
    totalInterest: number,
    totalValue: number,
    currentRatio: number,
    totalRatio: number
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

const columns: ColDef[] = [
    { field: 'id', headerName: 'Period', width: 100 },
    { field: 'currentInvestment', headerName: 'Current Investment', width: 200 },
    { field: 'totalInvestment', headerName: 'Total Investment', width: 200 },
    { field: 'currentInterest', headerName: 'Current Interest', width: 200 },
    { field: 'totalInterest', headerName: 'Total Interest', width: 200 },
    { field: 'totalValue', headerName: 'Total Value', width: 200 },
    { field: 'currentRatio', headerName: 'Current Interest/Current Contribution %', width: 200 },
    { field: 'totalRatio', headerName: 'Total Interest/Total Contribution %', width: 200 }
];

export default function InvestmentCalculator(): JSX.Element {
    const [initial, setInitial] = useState(0);
    const [years, setYears] = useState(10);
    const [compoundingFrequency, setCompoundingFrequency] = useState<number>(Frequency.monthly);
    const [interest, setInterest] = useState(6);
    const [contribution, setContribution] = useState(100);
    const [contributionFrequency, setContributionFrequency] = useState<number>(Frequency.weekly);
    const [data, setData] = useState<Period[]>([]);

    useEffect(() => {
        const inputs = {
            initialAmount: initial,
            years,
            contributionFrequency,
            compoundingFrequency,
            interest,
            contributionAmount: contribution
        };

        console.log(generateCompoundingInterest(inputs));
        setData(generateCompoundingInterest(inputs));
    }, [initial, years, compoundingFrequency, interest, contribution, contributionFrequency]);

    return <>
        <Typography variant="h1">Investment Calculator</Typography>
    
        <form action="">
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
        </form>

        <Chart data={data}>
            <ArgumentAxis tickFormat={() => tick => tick} />
            <ValueAxis />

            <AreaSeries
                name="Investment"
                valueField="totalInvestment"
                argumentField="id"
            />
            <AreaSeries
                name="Interest"
                valueField="totalInterest"
                argumentField="id"
            />
            <Legend position="top" />
            <Title text="Portfolio value" />

            <Stack stacks={[{series: ['Investment', 'Interest']}]} />
        </Chart>

        <ul>
            <li>Periode: Periode in wich a change occured to the total amount, it can be a contribution or interest.</li>
        </ul>

        <DataGrid rows={data} columns={columns} pageSize={20} autoHeight />
    </>;
}