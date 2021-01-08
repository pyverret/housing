import { Frequency } from '../enums/frequencies';
import {useState, useEffect} from 'react';
import {generateCompoundingInterest} from '../utils/compound';
import { DataGrid, ColDef } from '@material-ui/data-grid';
import { Chart, ArgumentAxis, ValueAxis, AreaSeries, Title, Legend, Tooltip } from '@devexpress/dx-react-chart-material-ui';
import { Stack } from '@devexpress/dx-react-chart';

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

const customizeTooltip = (pointInfo) => {
  return {
    html: `<div><div class="tooltip-header">Title</div><div class="tooltip-body"><div class="series-name">
    <span class='top-series-name'>Serie Name</span>: </div><div class="value-text"><span class='top-series-value'>Value Text</span></div><div class="series-name">
    <span class='bottom-series-name'>Serie Name</span>: </div><div class="value-text"><span class='bottom-series-value'>Value</span>% </div></div></div>`
  }
}

function Home(): JSX.Element {
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

  return <div>
    <h1>Home</h1>
  
    <form>
      <div>
        <label htmlFor="initial-amount">Initial Amount</label>
        <input id="initial-amount" type="number" defaultValue={initial} onChange={(event) => setInitial(parseInt(event.target.value))}/>
      </div>
      <div>
        <label htmlFor="years">Years</label>
        <input id="years" type="number" defaultValue={years} onChange={(event) => setYears(parseInt(event.target.value))}/>
      </div>
      <div>
        <label htmlFor="compounding-frequency">Compounding Frequency</label>
        <select name="compounding-frequency" id="compounding-frequency" defaultValue={compoundingFrequency} onChange={(event: React.ChangeEvent<{ value: any }>) => setCompoundingFrequency(parseInt(event.target.value))}>
          {compoundingFrequencies.map((frequency) => <option value={frequency} key={`compounding-${frequency}`} data-testid="compounding-frequency">{Frequency[frequency]}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="interest">Interest</label>
        <input id="interest" type="number" defaultValue={interest} onChange={(event) => setInterest(parseInt(event.target.value))}/>
      </div>
      <div>
        <label htmlFor="contribution-amount">Contribution Amount</label>
        <input id="contribution-amount" type="text" defaultValue={contribution} onChange={(event) => setContribution(parseInt(event.target.value))}/>
      </div>
      <div>
        <label htmlFor="contribution-frequency">Contribution Frequency</label>
        <select name="contribution-frequency" id="contribution-frequency" defaultValue={contributionFrequency} onChange={(event: React.ChangeEvent<{ value: any }>) => setContributionFrequency(parseInt(event.target.value))}>
          {contributionFrequencies.map((frequency) => <option value={frequency} key={`contribution-${frequency}`} data-testid="contribution-frequency">{Frequency[frequency]}</option>)}
        </select>
      </div>
    </form>

    <Chart data={data}>
          <ArgumentAxis tickFormat={() => tick => tick} />
          <ValueAxis />
          {/* <ValueAxis
          name="totalAmount"
          position="left"
          tickInterval={10000}
        />
          <ValueAxis
          name="id"
          position="bottom"
          tickInterval={12}
        /> */}
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

          {/* <Tooltip enabled={true} customizeTooltip={customizeTooltip} /> */}
          <Stack stacks={[{series: ['Investment', 'Interest']}]} />
        </Chart>

    <ul>
      <li>Periode: Periode in wich a change occured to the total amount, it can be a contribution or interest.</li>
    </ul>

    <DataGrid rows={data} columns={columns} pageSize={20} autoHeight />
    </div>;
}

export default Home;