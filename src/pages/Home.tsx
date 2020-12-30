import React, {useState} from 'react';
import Input from '../components/Input';
import Table from '../components/Table'; 
import {common, rent, ownership, investment} from '../utils/inputs';
import {rentTableTitles, rentTableData} from '../utils/tableRent';
import {ownershipTableTitles, ownershipTableData} from '../utils/tableOwnership';

function Home(): JSX.Element {
  const [values, setValues] = useState(
    {
      [common.duration.name]: common.duration.defaultValue,
      [rent.monthly.name]: rent.monthly.defaultValue,
      [rent.increase.name]: rent.increase.defaultValue,
      [investment.amount.name]: investment.amount.defaultValue,
      [investment.increase.name]: investment.increase.defaultValue,
      [investment.growth.name]: investment.growth.defaultValue,
      [ownership.value.name]: ownership.value.defaultValue,
      [ownership.down.name]: ownership.down.defaultValue,
      [ownership.amortization.name]: ownership.amortization.defaultValue,
      [ownership.payment.name]: ownership.payment.defaultValue,
      [ownership.appreciation.name]: ownership.appreciation.defaultValue,
      [ownership.taxes.name]: ownership.taxes.defaultValue,
      [ownership.fees.name]: ownership.fees.defaultValue
  });

  function handleChange(newValue: object) {
    setValues({...values, ...newValue});
  }

  return <>
    <h1>Home</h1>
    <p>Energy cost is being ignored because you will mostlikely need to pay them no mather what.</p>

    <ul>
      <li>Rent table</li>
      <li>Ownership table</li>
      <li>ADD (i) next to input with statistics</li>
      <li>Investment Per Month Amount Growth?</li>
      <li>Yearly lost/gained?</li>
      <li>Diff rent vs ownership per year?</li>
      <li>Note: Amount invested is estimated per month so the interest generated is trough the year</li>
      <li>Assumption investment is done on the first day of the month and compound the entire month</li>
    </ul>

    <form>
      <hr/>
        <h2>Common</h2>
        <Input details={common.duration} values={values} setData={handleChange} />
      <hr/>

      <div style={{display: 'inline-block', width: '50%'}}>
        <h2>Renting</h2>

        <Input details={rent.monthly} values={values} setData={handleChange} />
        <Input details={rent.increase} values={values} setData={handleChange} />
        <Input details={investment.amount} values={values} setData={handleChange} />
        <Input details={investment.increase} values={values} setData={handleChange} />
        <Input details={investment.growth} values={values} setData={handleChange} />
      </div>

      <div style={{display: 'inline-block', width: '50%'}}>
        <h2>Ownership</h2>

        <Input details={ownership.value} values={values} setData={handleChange} />
        <Input details={ownership.down} values={values} setData={handleChange} />
        <Input details={ownership.amortization} values={values} setData={handleChange} />
        <Input details={ownership.payment} values={values} setData={handleChange} />
        <Input details={ownership.appreciation} values={values} setData={handleChange} />
        <Input details={ownership.taxes} values={values} setData={handleChange} />
        <Input details={ownership.fees} values={values} setData={handleChange} />
      </div>
      <hr/>
      <div style={{display: 'inline-block', width: '50%'}}>
        <Table header={rentTableTitles} data={rentTableData(values)} prefix="rent" />
      </div>
      <div style={{display: 'inline-block', width: '50%'}}>
        <Table header={ownershipTableTitles} data={ownershipTableData(values)} prefix="ownership" />
      </div>
    </form>
    </>;
}

export default Home;