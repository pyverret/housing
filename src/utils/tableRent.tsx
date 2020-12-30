import {getPercentageIncreasePerYear, getYearlyCapitalGain, getNetWorthList} from './math';

type tableContent = {
    title: number | string,
    content: Array<number|string>
}

export const rentTableTitles = ['Year', 'Monthly Rent', 'Yearly Rent', 'Principal', 'Investment Balance', 'Worth'];

export function rentTableData (values) {
    const rows: tableContent[] = [];
    // let investmentValue: number = 0;
    let totalPrincipal: number = 0;
    let totalBalance: number = 0;

    console.log(getNetWorthList(values.duration));

    for (let i = 0; i < values.duration; i++) {
        const year: number = new Date().getFullYear() + i;
        const rent: string = getPercentageIncreasePerYear(values['rent-increase-percentage'], values['rent-monthly'], i).toFixed(2);
        const yearlyRent: string = (Number(rent) * 12).toFixed(2);
        const monthlyInvestment: string = getPercentageIncreasePerYear(values['investment-increase'], values.investment, i).toFixed(2);
        // investmentValue = getYearlyCapitalGain(investmentValue, Number(monthlyInvestment), values.growth, i + 1);
        // const worth: string = (-Number(yearlyRent) + Number(investmentValue)).toFixed(2);
        totalPrincipal = totalPrincipal + (Number(monthlyInvestment) * 12);
        totalBalance = totalBalance + getYearlyCapitalGain(totalBalance, Number(monthlyInvestment), values.growth, i + 1);

        rows.push({title: year, content: [year, rent, yearlyRent, totalPrincipal.toFixed(2), totalBalance.toFixed(2), 'TODO']});
    }
    return rows;
}