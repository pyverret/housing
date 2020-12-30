type InputDetail = {
    defaultValue?: number
    name: string,
    text:string,
    type: string,
}

type InputDetails = {
    key: InputDetail
};

export const common = {
    duration: {name:'duration', text:'Number of year to compare', type: 'number', defaultValue: 10}
};

export const investment = {
    amount: {name:'investment', text:'Investment Per Month', type: 'number', defaultValue: 200.00},
    increase: {name: 'investment-increase', text: 'Investment Increase Per Year Percentage', type: 'number', defaultValue: 0},
    growth: {name:'growth', text:'Investment growth', type: 'number', defaultValue: 8}
}

export const ownership = {
    value: {name:'property-value', text:'Property Value', type: 'number', defaultValue: 200000.00},
    down: {name:'mortgage-down-payment', text:'Down Payment', type: 'number', defaultValue: 10000.00},
    amortization: {name:'mortgage-amortization', text:'Amortization period', type: 'number', defaultValue: 25},
    payment: {name:'mortgage-monthly', text:'Monthly Mortgage Cost', type: 'number', defaultValue: 900.00},
    appreciation: {name:'property-appreciate', text:'Property appreciation per year', type: 'number', defaultValue: 4},
    taxes: {name:'property-taxes', text:'Taxes', type: 'number', defaultValue: 2},
    fees: {name:'property-fees', text:'Maintenance and fees', type: 'number', defaultValue: 300.00}
};

export const rent = {
    monthly: {name:'rent-monthly', text:'Monthly Rent Cost', type: 'number', defaultValue: 1000.00},
    increase: {name:'rent-increase-percentage', text:'Yearly Rent Increase', type: 'number', defaultValue: 1.8}
};

export default {common, investment, ownership, rent};