export function getPercentageIncreasePerYear(percent: number, base: number, years: number): number {
    let amount = base;

    for(let i = 0; i < years; i++) {
        if (years > 0) {
            const percentAmount = (percent / 100) * amount;

            amount = amount + percentAmount;
        }
    }

    return amount;
}

export function getYearlyCapitalGain (principal: number, newCapital: number, annualInterestRate: number, years: number) {
    const percent = annualInterestRate / 100;
    const frequency = 12;
    let totalValue = 0;

    for (let i = 0; i < frequency; i++) {
        // if (i === 0) {
            // totalValue += newCapital;
        // } else {
            totalValue += newCapital*(Math.pow(1 + (percent/frequency), years)); 
        // }
    } 

    return totalValue;
}

type Worth = {
    index: number
}
export function getNetWorthList (years: number) {
    const list: Array<Worth> = [];

    for (let i = 0; i < years; i++) {
        list.push({index: i});
    }

    return list;
}

export default {getPercentageIncreasePerYear, getYearlyCapitalGain, getNetWorthList};