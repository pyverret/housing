import {round, percent, generateCompoundingInterest} from '../compound';
import {Frequency} from '../../enums/frequencies';
test('Frequency', () => {
    expect(Frequency.annually).toBe(1);
    expect(Frequency.semiAnnually).toBe(2);
    expect(Frequency.quarterly).toBe(4);
    expect(Frequency.monthly).toBe(12);
    expect(Frequency.biWeekly).toBe(26);
    expect(Frequency.weekly).toBe(52);
});

describe('Round', () => {
    it('Integers', () => {
        expect(round(1)).toBe(1);
        expect(round(20)).toBe(20);
        expect(round(300)).toBe(300);
        expect(round(4999)).toBe(4999);
    });

    it('Float', () => {
        expect(round(1.9)).toBe(1.9);
        expect(round(2.99)).toBe(2.99);
        expect(round(3.005)).toBe(3.01);
        expect(round(3.995)).toBe(4);
        expect(round(3.994)).toBe(3.99);
    });

    it('String', () => {
        expect(round('3.005')).toBe(3.01);
        expect(round('3.995')).toBe(4);
        expect(round('3.994')).toBe(3.99);
    });

    it('String exceptions', () => {
        expect(round('3d123')).toBe(3);
        expect(round('asd12')).toBe(NaN);
    });
});

describe('Percent', () => {
    it('Integer', () => {
        expect(percent(0)).toBe(0);
        expect(percent(1)).toBe(0.01);
        expect(percent(10)).toBe(0.1);
        expect(percent(100)).toBe(1);
    });

    it('Float', () => {
        expect(percent(0.00)).toBe(0);
        expect(percent(1.23)).toBe(0.0123);
    });
});

describe('generateCompoundingInterest', () => {
    describe('Montly Compounding', () => {
        it('Weekly contribution montly compounding', () => {
            const schedule = [
                { currentInterest: 2.3, currentInvestment: 800, period: 1, totalInterest: 2.3, totalInvestment: 800, totalValue: 802.3 },
                { currentInterest: 8.47, currentInvestment: 800, period: 2, totalInterest: 10.78, totalInvestment: 1600, totalValue: 1610.78 },
                { currentInterest: 14.69, currentInvestment: 800, period: 3, totalInterest: 25.47, totalInvestment: 2400, totalValue: 2425.47 },
                { currentInterest: 20.95, currentInvestment: 800, period: 4, totalInterest: 46.42, totalInvestment: 3200, totalValue: 3246.42 },
                { currentInterest: 27.27, currentInvestment: 800, period: 5, totalInterest: 73.69, totalInvestment: 4000, totalValue: 4073.69 },
                { currentInterest: 33.63, currentInvestment: 800, period: 6, totalInterest: 107.32, totalInvestment: 4800, totalValue: 4907.32 },
                { currentInterest: 40.04, currentInvestment: 800, period: 7, totalInterest: 147.36, totalInvestment: 5600, totalValue: 5747.36 },
                { currentInterest: 46.5, currentInvestment: 800, period: 8, totalInterest: 193.86, totalInvestment: 6400, totalValue: 6593.86 },
                { currentInterest: 53.01, currentInvestment: 800, period: 9, totalInterest: 246.87, totalInvestment: 7200, totalValue: 7446.87 },
                { currentInterest: 59.57, currentInvestment: 800, period: 10, totalInterest: 306.43, totalInvestment: 8000, totalValue: 8306.43 },
                { currentInterest: 66.18, currentInvestment: 800, period: 11, totalInterest: 372.61, totalInvestment: 8800, totalValue: 9172.61 },
                { currentInterest: 72.84, currentInvestment: 800, period: 12, totalInterest: 445.45, totalInvestment: 9600, totalValue: 10045.45 },
                { currentInterest: 79.55, currentInvestment: 800, period: 13, totalInterest: 525, totalInvestment: 10400, totalValue: 10925 }
            ];

            const result = generateCompoundingInterest({
                initialAmount: 0,
                years: 1,
                contributionFrequency: 52,
                compoundingFrequency: 12,
                interest: 10,
                contributionAmount: 200
            });

            expect(result).toEqual(schedule);
        });

        it('Bi-Weekly contribution montly compounding', () => {
            const schedule = [
                { currentInterest: 0.77, currentInvestment: 400, period: 1, totalInterest: 0.77, totalInvestment: 400, totalValue: 400.77 },
                { currentInterest: 3.85, currentInvestment: 400, period: 2, totalInterest: 4.62, totalInvestment: 800, totalValue: 804.62 },
                { currentInterest: 6.95, currentInvestment: 400, period: 3, totalInterest: 11.57, totalInvestment: 1200, totalValue: 1211.57 },
                { currentInterest: 10.08, currentInvestment: 400, period: 4, totalInterest: 21.66, totalInvestment: 1600, totalValue: 1621.66 },
                { currentInterest: 13.24, currentInvestment: 400, period: 5, totalInterest: 34.89, totalInvestment: 2000, totalValue: 2034.89 },
                { currentInterest: 16.42, currentInvestment: 400, period: 6, totalInterest: 51.31, totalInvestment: 2400, totalValue: 2451.31 },
                { currentInterest: 19.62, currentInvestment: 400, period: 7, totalInterest: 70.93, totalInvestment: 2800, totalValue: 2870.93 },
                { currentInterest: 22.84, currentInvestment: 400, period: 8, totalInterest: 93.77, totalInvestment: 3200, totalValue: 3293.77 },
                { currentInterest: 26.1, currentInvestment: 400, period: 9, totalInterest: 119.87, totalInvestment: 3600, totalValue: 3719.87 },
                { currentInterest: 29.37, currentInvestment: 400, period: 10, totalInterest: 149.24, totalInvestment: 4000, totalValue: 4149.24 },
                { currentInterest: 32.67, currentInvestment: 400, period: 11, totalInterest: 181.92, totalInvestment: 4400, totalValue: 4581.92 },
                { currentInterest: 36, currentInvestment: 400, period: 12, totalInterest: 217.92, totalInvestment: 4800, totalValue: 5017.92 },
                { currentInterest: 39.35, currentInvestment: 400, period: 13, totalInterest: 257.27, totalInvestment: 5200, totalValue: 5457.27 }
            ];

            const result = generateCompoundingInterest({
                initialAmount: 0,
                years: 1,
                contributionFrequency: 26,
                compoundingFrequency: 12,
                interest: 10,
                contributionAmount: 200
            });

            expect(result).toEqual(schedule);
        });

        it('Monthly contribution montly compounding', () => {
            const schedule = [
                { currentInterest: 0, currentInvestment: 200, period: 1, totalInterest: 0, totalInvestment: 200, totalValue: 200 },
                { currentInterest: 1.67, currentInvestment: 200, period: 2, totalInterest: 1.67, totalInvestment: 400, totalValue: 401.67 },
                { currentInterest: 3.35, currentInvestment: 200, period: 3, totalInterest: 5.01, totalInvestment: 600, totalValue: 605.01 },
                { currentInterest: 5.04, currentInvestment: 200, period: 4, totalInterest: 10.06, totalInvestment: 800, totalValue: 810.06 },
                { currentInterest: 6.75, currentInvestment: 200, period: 5, totalInterest: 16.81, totalInvestment: 1000, totalValue: 1016.81 },
                { currentInterest: 8.47, currentInvestment: 200, period: 6, totalInterest: 25.28, totalInvestment: 1200, totalValue: 1225.28 },
                { currentInterest: 10.21, currentInvestment: 200, period: 7, totalInterest: 35.49, totalInvestment: 1400, totalValue: 1435.49 },
                { currentInterest: 11.96, currentInvestment: 200, period: 8, totalInterest: 47.45, totalInvestment: 1600, totalValue: 1647.45 },
                { currentInterest: 13.73, currentInvestment: 200, period: 9, totalInterest: 61.18, totalInvestment: 1800, totalValue: 1861.18 },
                { currentInterest: 15.51, currentInvestment: 200, period: 10, totalInterest: 76.69, totalInvestment: 2000, totalValue: 2076.69 },
                { currentInterest: 17.31, currentInvestment: 200, period: 11, totalInterest: 94, totalInvestment: 2200, totalValue: 2294 },
                { currentInterest: 19.12, currentInvestment: 200, period: 12, totalInterest: 113.11, totalInvestment: 2400, totalValue: 2513.11 }
            ];

            const result = generateCompoundingInterest({
                initialAmount: 0,
                years: 1,
                contributionFrequency: 12,
                compoundingFrequency: 12,
                interest: 10,
                contributionAmount: 200
            });

            expect(result).toEqual(schedule);
        });

        it('Quarterly contribution montly compounding', () => {
            const schedule = [
                { currentInterest: 0, currentInvestment: 0, period: 1, totalInterest: 0, totalInvestment: 0, totalValue: 0 },
                { currentInterest: 0, currentInvestment: 0, period: 2, totalInterest: 0, totalInvestment: 0, totalValue: 0 },
                { currentInterest: 0, currentInvestment: 200, period: 3, totalInterest: 0, totalInvestment: 200, totalValue: 200 },
                { currentInterest: 1.67, currentInvestment: 0, period: 4, totalInterest: 1.67, totalInvestment: 200, totalValue: 201.67 },
                { currentInterest: 1.68, currentInvestment: 0, period: 5, totalInterest: 3.35, totalInvestment: 200, totalValue: 203.35 },
                { currentInterest: 1.69, currentInvestment: 200, period: 6, totalInterest: 5.04, totalInvestment: 400, totalValue: 405.04 },
                { currentInterest: 3.38, currentInvestment: 0, period: 7, totalInterest: 8.42, totalInvestment: 400, totalValue: 408.42 },
                { currentInterest: 3.4, currentInvestment: 0, period: 8, totalInterest: 11.82, totalInvestment: 400, totalValue: 411.82 },
                { currentInterest: 3.43, currentInvestment: 200, period: 9, totalInterest: 15.25, totalInvestment: 600, totalValue: 615.25 },
                { currentInterest: 5.13, currentInvestment: 0, period: 10, totalInterest: 20.38, totalInvestment: 600, totalValue: 620.38 },
                { currentInterest: 5.17, currentInvestment: 0, period: 11, totalInterest: 25.55, totalInvestment: 600, totalValue: 625.55 },
                { currentInterest: 5.21, currentInvestment: 200, period: 12, totalInterest: 30.76, totalInvestment: 800, totalValue: 830.76 }
            ];

            const result = generateCompoundingInterest({
                initialAmount: 0,
                years: 1,
                contributionFrequency: 4,
                compoundingFrequency: 12,
                interest: 10,
                contributionAmount: 200
            });

            expect(result).toEqual(schedule);
        });
    });

    describe('Semi-Annually Compounding', () => {
        it('Weekly', () => {
            const schedule = [
                { currentInterest: 123.94, currentInvestment: 5200, period: 1, totalInterest: 123.94, totalInvestment: 5200, totalValue: 5323.94 },
                { currentInterest: 390.14, currentInvestment: 5200, period: 2, totalInterest: 514.09, totalInvestment: 10400, totalValue: 10914.09 }
            ];

            const result = generateCompoundingInterest({
                initialAmount: 0,
                years: 1,
                contributionFrequency: 52,
                compoundingFrequency: 2,
                interest: 10,
                contributionAmount: 200
            });

            expect(result).toEqual(schedule);
        });

        it('Quarterly', () => {
            const schedule = [
                { currentInterest: 4.94, currentInvestment: 400, period: 1, totalInterest: 4.94, totalInvestment: 400, totalValue: 404.94 },
                { currentInterest: 25.19, currentInvestment: 400, period: 2, totalInterest: 30.12, totalInvestment: 800, totalValue: 830.12 }
            ];

            const result = generateCompoundingInterest({
                initialAmount: 0,
                years: 1,
                contributionFrequency: 4,
                compoundingFrequency: 2,
                interest: 10,
                contributionAmount: 200
            });

            expect(result).toEqual(schedule);
        });
    });
});