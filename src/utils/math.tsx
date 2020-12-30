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

export function getYearlyCapitalGain (currentInvestment: number, capital: number, interest: number, years: number) {
    const percent = interest / 100;
    const frequency = 12;
    let totalAmount = 0;
console.log('--------');
    for (let i = 0; i < frequency; i++) {
        const temp = totalAmount;
        totalAmount = (totalAmount + capital) * Math.pow(1 + percent / frequency, years);
        // console.log((totalAmount - temp).toFixed(2));
    }
    // console.log((totalAmount).toFixed(2));

    return totalAmount;
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