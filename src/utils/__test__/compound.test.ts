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

describe('generateCompoundingInterest', () => {
    describe('Montly Compounding', () => {
        it('Weekly contribution montly compounding', () => {
            const schedule = [
                { currentInterest: 2.3, currentInvestment: 800, currentRatio: 0.29, id: 1, totalInterest: 2.3, totalInvestment: 800, totalRatio: 0.29, totalValue: 802.3 },
                { currentInterest: 8.47, currentInvestment: 800, currentRatio: 1.06, id: 2, totalInterest: 10.78, totalInvestment: 1600, totalRatio: 0.67, totalValue: 1610.78 },
                { currentInterest: 14.69, currentInvestment: 800, currentRatio: 1.84, id: 3, totalInterest: 25.47, totalInvestment: 2400, totalRatio: 1.06, totalValue: 2425.47 },
                { currentInterest: 20.95, currentInvestment: 800, currentRatio: 2.62, id: 4, totalInterest: 46.42, totalInvestment: 3200, totalRatio: 1.45, totalValue: 3246.42 },
                { currentInterest: 27.27, currentInvestment: 800, currentRatio: 3.41, id: 5, totalInterest: 73.69, totalInvestment: 4000, totalRatio: 1.84, totalValue: 4073.69 },
                { currentInterest: 33.63, currentInvestment: 800, currentRatio: 4.2, id: 6, totalInterest: 107.32, totalInvestment: 4800, totalRatio: 2.24, totalValue: 4907.32 },
                { currentInterest: 40.04, currentInvestment: 800, currentRatio: 5.01, id: 7, totalInterest: 147.36, totalInvestment: 5600, totalRatio: 2.63, totalValue: 5747.36 },
                { currentInterest: 46.5, currentInvestment: 800, currentRatio: 5.81, id: 8, totalInterest: 193.86, totalInvestment: 6400, totalRatio: 3.03, totalValue: 6593.86 },
                { currentInterest: 53.01, currentInvestment: 800, currentRatio: 6.63, id: 9, totalInterest: 246.87, totalInvestment: 7200, totalRatio: 3.43, totalValue: 7446.87 },
                { currentInterest: 59.57, currentInvestment: 800, currentRatio: 7.45, id: 10, totalInterest: 306.43, totalInvestment: 8000, totalRatio: 3.83, totalValue: 8306.43 },
                { currentInterest: 66.18, currentInvestment: 800, currentRatio: 8.27, id: 11, totalInterest: 372.61, totalInvestment: 8800, totalRatio: 4.23, totalValue: 9172.61 },
                { currentInterest: 72.84, currentInvestment: 800, currentRatio: 9.11, id: 12, totalInterest: 445.45, totalInvestment: 9600, totalRatio: 4.64, totalValue: 10045.45 },
                { currentInterest: 79.55, currentInvestment: 800, currentRatio: 9.94, id: 13, totalInterest: 525, totalInvestment: 10400, totalRatio: 5.05, totalValue: 10925 }
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
                { currentInterest: 0.77, currentInvestment: 400, currentRatio: 0.19, id: 1, totalInterest: 0.77, totalInvestment: 400, totalRatio: 0.19, totalValue: 400.77 },
                { currentInterest: 3.85, currentInvestment: 400, currentRatio: 0.96, id: 2, totalInterest: 4.62, totalInvestment: 800, totalRatio: 0.58, totalValue: 804.62 },
                { currentInterest: 6.95, currentInvestment: 400, currentRatio: 1.74, id: 3, totalInterest: 11.57, totalInvestment: 1200, totalRatio: 0.96, totalValue: 1211.57 },
                { currentInterest: 10.08, currentInvestment: 400, currentRatio: 2.52, id: 4, totalInterest: 21.66, totalInvestment: 1600, totalRatio: 1.35, totalValue: 1621.66 },
                { currentInterest: 13.24, currentInvestment: 400, currentRatio: 3.31, id: 5, totalInterest: 34.89, totalInvestment: 2000, totalRatio: 1.74, totalValue: 2034.89 },
                { currentInterest: 16.42, currentInvestment: 400, currentRatio: 4.11, id: 6, totalInterest: 51.31, totalInvestment: 2400, totalRatio: 2.14, totalValue: 2451.31 },
                { currentInterest: 19.62, currentInvestment: 400, currentRatio: 4.91, id: 7, totalInterest: 70.93, totalInvestment: 2800, totalRatio: 2.53, totalValue: 2870.93 },
                { currentInterest: 22.84, currentInvestment: 400, currentRatio: 5.71, id: 8, totalInterest: 93.77, totalInvestment: 3200, totalRatio: 2.93, totalValue: 3293.77 },
                { currentInterest: 26.1, currentInvestment: 400, currentRatio: 6.53, id: 9, totalInterest: 119.87, totalInvestment: 3600, totalRatio: 3.33, totalValue: 3719.87 },
                { currentInterest: 29.37, currentInvestment: 400, currentRatio: 7.34, id: 10, totalInterest: 149.24, totalInvestment: 4000, totalRatio: 3.73, totalValue: 4149.24 },
                { currentInterest: 32.67, currentInvestment: 400, currentRatio: 8.17, id: 11, totalInterest: 181.92, totalInvestment: 4400, totalRatio: 4.13, totalValue: 4581.92 },
                { currentInterest: 36, currentInvestment: 400, currentRatio: 9, id: 12, totalInterest: 217.92, totalInvestment: 4800, totalRatio: 4.54, totalValue: 5017.92 },
                { currentInterest: 39.35, currentInvestment: 400, currentRatio: 9.84, id: 13, totalInterest: 257.27, totalInvestment: 5200, totalRatio: 4.95, totalValue: 5457.27 }
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
                { currentInterest: 0, currentInvestment: 200, currentRatio: 0, id: 1, totalInterest: 0, totalInvestment: 200, totalRatio: 0, totalValue: 200 },
                { currentInterest: 1.67, currentInvestment: 200, currentRatio: 0.84, id: 2, totalInterest: 1.67, totalInvestment: 400, totalRatio: 0.42, totalValue: 401.67 },
                { currentInterest: 3.35, currentInvestment: 200, currentRatio: 1.68, id: 3, totalInterest: 5.01, totalInvestment: 600, totalRatio: 0.84, totalValue: 605.01 },
                { currentInterest: 5.04, currentInvestment: 200, currentRatio: 2.52, id: 4, totalInterest: 10.06, totalInvestment: 800, totalRatio: 1.26, totalValue: 810.06 },
                { currentInterest: 6.75, currentInvestment: 200, currentRatio: 3.38, id: 5, totalInterest: 16.81, totalInvestment: 1000, totalRatio: 1.68, totalValue: 1016.81 },
                { currentInterest: 8.47, currentInvestment: 200, currentRatio: 4.24, id: 6, totalInterest: 25.28, totalInvestment: 1200, totalRatio: 2.11, totalValue: 1225.28 },
                { currentInterest: 10.21, currentInvestment: 200, currentRatio: 5.11, id: 7, totalInterest: 35.49, totalInvestment: 1400, totalRatio: 2.54, totalValue: 1435.49 },
                { currentInterest: 11.96, currentInvestment: 200, currentRatio: 5.98, id: 8, totalInterest: 47.45, totalInvestment: 1600, totalRatio: 2.97, totalValue: 1647.45 },
                { currentInterest: 13.73, currentInvestment: 200, currentRatio: 6.87, id: 9, totalInterest: 61.18, totalInvestment: 1800, totalRatio: 3.4, totalValue: 1861.18 },
                { currentInterest: 15.51, currentInvestment: 200, currentRatio: 7.76, id: 10, totalInterest: 76.69, totalInvestment: 2000, totalRatio: 3.83, totalValue: 2076.69 },
                { currentInterest: 17.31, currentInvestment: 200, currentRatio: 8.65, id: 11, totalInterest: 94, totalInvestment: 2200, totalRatio: 4.27, totalValue: 2294 },
                { currentInterest: 19.12, currentInvestment: 200, currentRatio: 9.56, id: 12, totalInterest: 113.11, totalInvestment: 2400, totalRatio: 4.71, totalValue: 2513.11 }
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
                { currentInterest: 0, currentInvestment: 0, currentRatio: 0, id: 1, totalInterest: 0, totalInvestment: 0, totalRatio: 0, totalValue: 0 },
                { currentInterest: 0, currentInvestment: 0, currentRatio: 0, id: 2, totalInterest: 0, totalInvestment: 0, totalRatio: 0, totalValue: 0 },
                { currentInterest: 0, currentInvestment: 200, currentRatio: 0, id: 3, totalInterest: 0, totalInvestment: 200, totalRatio: 0, totalValue: 200 },
                { currentInterest: 1.67, currentInvestment: 0, currentRatio: 0, id: 4, totalInterest: 1.67, totalInvestment: 200, totalRatio: 0.84, totalValue: 201.67 },
                { currentInterest: 1.68, currentInvestment: 0, currentRatio: 0, id: 5, totalInterest: 3.35, totalInvestment: 200, totalRatio: 1.68, totalValue: 203.35 },
                { currentInterest: 1.69, currentInvestment: 200, currentRatio: 0.85, id: 6, totalInterest: 5.04, totalInvestment: 400, totalRatio: 1.26, totalValue: 405.04 },
                { currentInterest: 3.38, currentInvestment: 0, currentRatio: 0, id: 7, totalInterest: 8.42, totalInvestment: 400, totalRatio: 2.11, totalValue: 408.42 },
                { currentInterest: 3.4, currentInvestment: 0, currentRatio: 0, id: 8, totalInterest: 11.82, totalInvestment: 400, totalRatio: 2.96, totalValue: 411.82 },
                { currentInterest: 3.43, currentInvestment: 200, currentRatio: 1.72, id: 9, totalInterest: 15.25, totalInvestment: 600, totalRatio: 2.54, totalValue: 615.25 },
                { currentInterest: 5.13, currentInvestment: 0, currentRatio: 0, id: 10, totalInterest: 20.38, totalInvestment: 600, totalRatio: 3.4, totalValue: 620.38 },
                { currentInterest: 5.17, currentInvestment: 0, currentRatio: 0, id: 11, totalInterest: 25.55, totalInvestment: 600, totalRatio: 4.26, totalValue: 625.55 },
                { currentInterest: 5.21, currentInvestment: 200, currentRatio: 2.61, id: 12, totalInterest: 30.76, totalInvestment: 800, totalRatio: 3.85, totalValue: 830.76 }
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
                { currentInterest: 123.94, currentInvestment: 5200, currentRatio: 2.38, id: 1, totalInterest: 123.94, totalInvestment: 5200, totalRatio: 2.38, totalValue: 5323.94 },
                { currentInterest: 390.14, currentInvestment: 5200, currentRatio: 7.5, id: 2, totalInterest: 514.09, totalInvestment: 10400, totalRatio: 4.94, totalValue: 10914.09 }
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
                { currentInterest: 4.94, currentInvestment: 400, currentRatio: 1.24, id: 1, totalInterest: 4.94, totalInvestment: 400, totalRatio: 1.24, totalValue: 404.94 },
                { currentInterest: 25.19, currentInvestment: 400, currentRatio: 6.3, id: 2, totalInterest: 30.12, totalInvestment: 800, totalRatio: 3.77, totalValue: 830.12 }
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

    describe('The missing scenarios', () => {
        it('bi-weekly contribution with quarterly compounding', () => {
            const schedule = [
                { currentInterest: 13.78, currentInvestment: 1200, currentRatio: 1.15, id: 1, totalInterest: 13.78, totalInvestment: 1200, totalRatio: 1.15, totalValue: 1213.78 },
                { currentInterest: 46.43, currentInvestment: 1400, currentRatio: 3.32, id: 2, totalInterest: 60.21, totalInvestment: 2600, totalRatio: 2.32, totalValue: 2660.21 },
                { currentInterest: 80.28, currentInvestment: 1200, currentRatio: 6.69, id: 3, totalInterest: 140.5, totalInvestment: 3800, totalRatio: 3.7, totalValue: 3940.5 },
                { currentInterest: 114.6, currentInvestment: 1400, currentRatio: 8.19, id: 4, totalInterest: 255.1, totalInvestment: 5200, totalRatio: 4.91, totalValue: 5455.1 }
            ];

            const result = generateCompoundingInterest({
                initialAmount: 0,
                years: 1,
                contributionFrequency: 26,
                compoundingFrequency: 4,
                interest: 10,
                contributionAmount: 200
            });

            expect(result).toEqual(schedule);
        });

        it('annual contribution with annual compounding', () => {
            const schedule = [
                { currentInterest: 0, currentInvestment: 200, currentRatio: 0, id: 1, totalInterest: 0, totalInvestment: 200, totalRatio: 0, totalValue: 200 },
                { currentInterest: 20, currentInvestment: 200, currentRatio: 10, id: 2, totalInterest: 20, totalInvestment: 400, totalRatio: 5, totalValue: 420 },
                { currentInterest: 42, currentInvestment: 200, currentRatio: 21, id: 3, totalInterest: 62, totalInvestment: 600, totalRatio: 10.33, totalValue: 662 }
            ];

            const result = generateCompoundingInterest({
                initialAmount: 0,
                years: 3,
                contributionFrequency: 1,
                compoundingFrequency: 1,
                interest: 10,
                contributionAmount: 200
            });

            expect(result).toEqual(schedule);
        });


        it('annual contribution with annual compounding', () => {
            const schedule = [
                { currentInterest: 9.76, currentInvestment: 400, currentRatio: 2.44, id: 1, totalInterest: 9.76, totalInvestment: 400, totalRatio: 2.44, totalValue: 409.76 },
                { currentInterest: 50.74, currentInvestment: 400, currentRatio: 12.69, id: 2, totalInterest: 60.5, totalInvestment: 800, totalRatio: 7.56, totalValue: 860.5 },
                { currentInterest: 95.81, currentInvestment: 400, currentRatio: 23.95, id: 3, totalInterest: 156.31, totalInvestment: 1200, totalRatio: 13.03, totalValue: 1356.31 }
            ];

            const result = generateCompoundingInterest({
                initialAmount: 0,
                years: 3,
                contributionFrequency: 2,
                compoundingFrequency: 1,
                interest: 10,
                contributionAmount: 200
            });

            expect(result).toEqual(schedule);
        });
    });
});