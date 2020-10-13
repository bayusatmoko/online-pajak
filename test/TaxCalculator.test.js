import TaxCalculator from '../src/TaxCalculator';

describe('TaxCalculator', () => {
  describe('calculate', () => {
    const scheme = {
      range: [0, 50000000, 250000000, 500000000],
      taxRate: [5, 15, 25, 30],
      taxRelief: {
        TK0: 54000000,
        K0: 58500000,
        K1: 63000000,
        K2: 67500000,
        K3: 72000000
      }
    };
    it('should return 0 when the salary is 0', () => {
      const taxCalculator = new TaxCalculator();
      const expectedAnnualTaxResult = 0;

      const annualTaxResult = taxCalculator.calculate();

      expect(annualTaxResult).toEqual(expectedAnnualTaxResult);
    });

    it('should return 1800000 when the salary is 3000000', () => {
      const salary = 3000000;
      const taxCalculator = new TaxCalculator(scheme, salary);
      const expectedAnnualTaxResult = 1800000;

      const annualTaxResult = taxCalculator.calculate();

      expect(annualTaxResult).toEqual(expectedAnnualTaxResult);
    });

    it('should return 4000000 when the salary is 5000000', () => {
      const salary = 5000000;
      const taxCalculator = new TaxCalculator(scheme, salary);
      const expectedAnnualTaxResult = 4000000;

      const annualTaxResult = taxCalculator.calculate();

      expect(annualTaxResult).toEqual(expectedAnnualTaxResult);
    });

    it('should return 45000000 when the salary is 25000000', () => {
      const salary = 25000000;
      const taxCalculator = new TaxCalculator(scheme, salary);
      const expectedAnnualTaxResult = 45000000;

      const annualTaxResult = taxCalculator.calculate();

      expect(annualTaxResult).toEqual(expectedAnnualTaxResult);
    });

    it('should return 115000000 when the salary is 50000000', () => {
      const salary = 50000000;
      const taxCalculator = new TaxCalculator(scheme, salary);
      const expectedAnnualTaxResult = 125000000;

      const annualTaxResult = taxCalculator.calculate();

      expect(annualTaxResult).toEqual(expectedAnnualTaxResult);
    });

    it('should return 750000 when the salary is 6500000 and profile K1', () => {
      const salary = 6500000;
      const profile = 'K1';
      const taxCalculator = new TaxCalculator(scheme, salary, profile);
      const expectedAnnualTaxResult = 750000;

      const annualTaxResult = taxCalculator.calculate();

      expect(annualTaxResult).toEqual(expectedAnnualTaxResult);
    });

    it('should return 750000 when the salary is 25000000 and profile TK0', () => {
      const salary = 25000000;
      const profile = 'TK0';
      const taxCalculator = new TaxCalculator(scheme, salary, profile);
      const expectedAnnualTaxResult = 31900000;

      const annualTaxResult = taxCalculator.calculate();

      expect(annualTaxResult).toEqual(expectedAnnualTaxResult);
    });
  });
});
