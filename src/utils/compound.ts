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

type Inputs = {
    initialAmount: number,
    years: number,
    contributionFrequency: number,
    compoundingFrequency: number,
    interest: number,
    contributionAmount: number
}

export const round = (value: number): number => {
    if (typeof value === 'string') {
        value = parseFloat(value);
    }

    return Math.round((value + Number.EPSILON) * 100) / 100;
}

const percent = (value: number): number => {
    return (value / 100);
}

const calculatePercent = (value: number, origin: number = 100): number => {
    if (origin === 0) {
        return 0
    }

    return (value * 100) / origin;
}

export const compoundingInterest = () => {

}

export const generateCompoundingInterest = (inputs: Inputs): Period[] => {
    const years = inputs.years;
    const contributionFrequency = inputs.contributionFrequency;
    const compoundingFrequency = inputs.compoundingFrequency;
    const interestPercent = percent(inputs.interest);
    const contributionAmount = inputs.contributionAmount;
    const numberOfContributions = (contributionFrequency === 26 || contributionFrequency === 52) ? years * 52 : years * 12;
    const initialAmount = inputs.initialAmount;

    if (contributionFrequency >= 26) {
        return calculateCompoundingForWeeklyAndBiWeeklyContribution(contributionFrequency, compoundingFrequency, interestPercent, contributionAmount, numberOfContributions, initialAmount);
    }

    return calculateCompoundingForMonthlyToAnnualContribution(contributionFrequency, compoundingFrequency, interestPercent, contributionAmount, numberOfContributions, initialAmount);
}

const calculateCompoundingForWeeklyAndBiWeeklyContribution = (contributionFrequency: number, compoundingFrequency: number, interestPercent: number, contributionAmount: number, numberOfContributions: number, initialAmount: number): Period[] => {
    const periodList: Period[] = [];

    const interestWeekly = getWeeklyInterest(interestPercent, compoundingFrequency);
    let interestTotal = 0;
    let interestPreviousLoop = 0;

    let investmentPreviousLoop = 0;
    let investmentCurrent = initialAmount;
    let investmentTotal = initialAmount;

    const compoundingFlag = getCompoundingFlag(contributionFrequency, compoundingFrequency);

    let period = getPeriod(contributionFrequency);

    for (let i = 1; i <= numberOfContributions; i++) {
        const interestCurrentLoop = investmentCurrent * interestWeekly;

        interestTotal += interestCurrentLoop;

        investmentTotal = getInvestmentTotalWeeklyBiWeekly(contributionFrequency, investmentTotal, contributionAmount, i);
        investmentCurrent = getInvestmentCurrentWeeklyBiWeekly(contributionFrequency, investmentCurrent, contributionAmount, interestCurrentLoop, i);

        const valueTotal = investmentTotal + interestTotal;

        if (i % (compoundingFlag) === 0) {
            const currentInterest = interestTotal - interestPreviousLoop;
            interestPreviousLoop = interestTotal;

            const currentInvestment = investmentTotal - investmentPreviousLoop;
            investmentPreviousLoop = investmentTotal;

            periodList.push({
                id: period,
                currentInvestment: round(currentInvestment),
                totalInvestment: round(investmentTotal),
                currentInterest: round(currentInterest),
                totalInterest: round(interestTotal),
                totalValue: round(valueTotal),
                currentRatio: round(calculatePercent(round(currentInterest), round(currentInvestment))),
                totalRatio: round(calculatePercent(round(interestTotal), round(investmentTotal)))
            });

            period++;
        }
    }

    return periodList;
}

const getInvestmentTotalWeeklyBiWeekly = (contributionFrequency: number, investmentTotal: number, contributionAmount: number, counter: number): number => {
    if (contributionFrequency === 52) {
        return investmentTotal += contributionAmount;
    } else {
        if (counter % 2 === 0) {
            return investmentTotal += contributionAmount;
        }
    }

    return investmentTotal;
}

const getInvestmentCurrentWeeklyBiWeekly = (contributionFrequency: number, investmentCurrent: number, contributionAmount: number, interestCurrentLoop: number, counter: number): number => {
    investmentCurrent += interestCurrentLoop;

    if (contributionFrequency === 52) {
        return investmentCurrent += contributionAmount
    } else {
        if (counter % 2 === 0) {
            return investmentCurrent += contributionAmount
        }
    }

    return investmentCurrent;
}

const calculateCompoundingForMonthlyToAnnualContribution = (contributionFrequency: number, compoundingFrequency: number, interestPercent: number, contributionAmount: number, numberOfContributions: number, initialAmount: number): Period[] => {
    const periodList: Period[] = [];

    const interestMonthly = getMonthlyInterest(interestPercent, compoundingFrequency);
    let interestTotal = 0;
    let interestPreviousLoop = 0;

    let investmentPreviousLoop = 0;
    let investmentCurrent = initialAmount;
    let investmentTotal = initialAmount;

    let period = getPeriod(contributionFrequency);

    const depositFlag = getDepositFlag(contributionFrequency);
    const tableFlag = getTableFlag(compoundingFrequency);

    for (let i = 1; i <= numberOfContributions; i++) {
        const contributionFlag = i % depositFlag;
        const interestCurrentLoop = investmentCurrent * interestMonthly;

        interestTotal += interestCurrentLoop;
        investmentCurrent += interestCurrentLoop;

        if (contributionFlag === 0) {
            investmentTotal += contributionAmount;
            investmentCurrent += contributionAmount
        }

        period = i / tableFlag;

        const valueTotal = investmentTotal + interestTotal;

        if (i % tableFlag === 0) {
            const currentInterest = interestTotal - interestPreviousLoop;
            interestPreviousLoop = interestTotal;

            const currentInvestment = investmentTotal - investmentPreviousLoop;
            investmentPreviousLoop = investmentTotal;

            periodList.push({
                id: period,
                currentInvestment: round(currentInvestment),
                totalInvestment: round(investmentTotal),
                currentInterest: round(currentInterest),
                totalInterest: round(interestTotal),
                totalValue: round(valueTotal),
                currentRatio: round(calculatePercent(round(currentInterest), round(currentInvestment))),
                totalRatio: round(calculatePercent(round(interestTotal), round(investmentTotal)))
            });
        }

    }

    return periodList;
}

const getEffectiveInterest = (interestPercent: number, compoundingFrequency: number): number => {
    // Effective Interest (Annual)
    return Math.pow((1 + (interestPercent / compoundingFrequency)), compoundingFrequency) - 1;
}

const getWeeklyInterest = (interestPercent: number, compoundingFrequency: number): number => {
    return Math.pow((1 + getEffectiveInterest(interestPercent, compoundingFrequency)), (1 / 52)) - 1;
}

const getMonthlyInterest = (interestPercent: number, compoundingFrequency: number): number => {
    return Math.pow((1 + getEffectiveInterest(interestPercent, compoundingFrequency)), (1 / 12)) - 1;
}

const getCompoundingFlag = (contributionFrequency: number, compoundingFrequency: number): number => {
    if (contributionFrequency === 52) {
        return Math.floor(contributionFrequency / compoundingFrequency);
    }

    if (contributionFrequency === 26) {
        return Math.floor(contributionFrequency / compoundingFrequency * 2);
    }

    console.error('No valid Compounding Flag Defined');
    return 0;
}

const getPeriod = (contributionFrequency: number): number => {
    if (contributionFrequency === 52) {
        return 1;
    }

    if (contributionFrequency === 26) {
        return 1;
    }

    return 0;
}

const getTableFlag = (compoundingFrequency: number): number => {
    if (compoundingFrequency === 12) {
        return 1;
    }

    if (compoundingFrequency === 4) {
        return 3
    }

    if (compoundingFrequency === 2) {
        return 6
    }

    if (compoundingFrequency === 1) {
        return 12;
    }

    console.error('No valid Compounding Frequency Defined');
    return 0;
}

const getDepositFlag = (contributionFrequency: number): number => {
    if (contributionFrequency === 12 || contributionFrequency === 52) {
        return 1;
    }

    if (contributionFrequency === 26) {
        return 2;
    }

    if (contributionFrequency === 4) {
        return 3;
    }

    if (contributionFrequency === 2) {
        return 6;
    }

    if (contributionFrequency === 1) {
        return 12;
    }

    console.error('No valid Compounding Frequency Defined');
    return 0;
}

export default { round, percent, generateCompoundingInterest };