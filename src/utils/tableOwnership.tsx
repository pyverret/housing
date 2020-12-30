import {getPercentageIncreasePerYear, getYearlyCapitalGain} from './math';

type tableContent = {
    title: number | string,
    content: Array<number|string>
}

export const ownershipTableTitles = ['Year'];

export function ownershipTableData (values) {
    const rows: tableContent[] = [];

    for (let i = 0; i < values.duration; i++) {
        const year: number = new Date().getFullYear() + i;

        rows.push({title: year, content: [year]});
    }
    return rows;
}