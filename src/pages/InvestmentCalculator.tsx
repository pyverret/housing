import React, {useState, useEffect} from 'react';
import {DataGrid, ColDef} from '@material-ui/data-grid';
import {Chart, ArgumentAxis, ValueAxis, AreaSeries, Title, Legend} from '@devexpress/dx-react-chart-material-ui';
import {Stack} from '@devexpress/dx-react-chart';
import BaseForm from '../components/InvestmentCalculator/BaseForm';
import BaseFormResume from '../components/InvestmentCalculator/BaseFormResume';
import {generateCompoundingInterest} from '../utils/compound';
import {Frequency} from '../enums/frequencies';

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

const columns: ColDef[] = [
    {field: 'id', headerName: 'Period', width: 100},
    {field: 'currentInvestment', headerName: 'Current Investment', width: 200},
    {field: 'totalInvestment', headerName: 'Total Investment', width: 200},
    {field: 'currentInterest', headerName: 'Current Interest', width: 200},
    {field: 'totalInterest', headerName: 'Total Interest', width: 200},
    {field: 'totalValue', headerName: 'Total Value', width: 200},
    {field: 'currentRatio', headerName: 'Current Interest/Current Contribution %', width: 200},
    {field: 'totalRatio', headerName: 'Total Interest/Total Contribution %', width: 200}
];

const defaultBaseInput = {
    initialAmount: 0,
    years: 10,
    contributionFrequency: Frequency.weekly,
    compoundingFrequency: Frequency.monthly,
    interest: 6,
    contributionAmount: 100
};

export default function InvestmentCalculator(): JSX.Element {
    const [data, setData] = useState<Period[]>([]);
    const [baseInputs, setBaseInputs] = useState(defaultBaseInput);

    useEffect(() => {
        setData(generateCompoundingInterest(baseInputs));
    }, [baseInputs]);

    return <>
        <h1>Investment Calculator</h1>
    
        <BaseForm setData={setBaseInputs} />
        {data.length > 0 && <BaseFormResume lastPeriod={data[data.length - 1]} {...baseInputs} />}

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