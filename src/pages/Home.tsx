import { Frequency } from '../enums/frequencies';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

function Home(): JSX.Element {

  return <>
    <h1>Home</h1>
    <form action="">
      <div>
        <TextField id="initial-amount" label="Initial Amount" type="number" defaultValue={0} />
      </div>
      <div>
        <TextField id="years" label="Years" type="number" defaultValue={10} />
      </div>
      <div>
        <FormControl>
          <InputLabel id="compounding-frequency">Compounding Frequency</InputLabel>
          <Select
            labelId="compounding-frequency"
            id="compounding-frequency"
            defaultValue={Frequency.monthly}
            style={{width: "225px"}}>
            {compoundingFrequencies.map((frequency) => <MenuItem value={frequency} key={`compounding-${frequency}`} data-testid="compounding-frequency">{Frequency[frequency]}</MenuItem>)}
          </Select>
        </FormControl>
      </div>
      <div>
        <TextField id="interest" label="Interest" type="number" defaultValue={6} />
      </div>
      <div>
        <TextField id="contribution-amount" label="Contribution Amount" type="number" defaultValue={100} />
      </div>
      <div>
        <FormControl>
          <InputLabel id="contribution-frequency">Contribution Frequency</InputLabel>
          <Select
            labelId="contribution-frequency"
            id="contribution-frequency"
            defaultValue={Frequency.weekly}
            style={{width: "225px"}}>
            {contributionFrequencies.map((frequency) => <MenuItem value={frequency} key={`contribution-${frequency}`} data-testid="contribution-frequency">{Frequency[frequency]}</MenuItem>)}
          </Select>
        </FormControl>
      </div>
    </form>
  </>;
}

export default Home;