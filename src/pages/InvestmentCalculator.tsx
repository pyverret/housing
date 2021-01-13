import React, {useState} from 'react';
import {DataGrid, ColDef} from '@material-ui/data-grid';
import {Chart, ArgumentAxis, ValueAxis, AreaSeries, Title, Legend} from '@devexpress/dx-react-chart-material-ui';
import {Stack} from '@devexpress/dx-react-chart';
import BaseForm from '../components/InvestmentCalculator/BaseForm';

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

export default function InvestmentCalculator(): JSX.Element {
    const [data, setData] = useState<Period[]>([]);

    return <>
        <h1>Investment Calculator</h1>
    
        <BaseForm setData={setData} />

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