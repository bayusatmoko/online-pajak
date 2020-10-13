export default class TaxCalculator {
  constructor(scheme, salary, profile) {
    this._scheme = scheme || {
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
    this._salary = salary || 0;
    this._profile = profile || '';
  }

  calculate() {
    const taxRelief = this._scheme.taxRelief[this._profile];
    let taxableIncome = (this._salary * 12);
    if (taxRelief) {
      taxableIncome -= taxRelief;
    }
    let annualTax = 0;
    for (let index = 1; index < this._scheme.range.length; index += 1) {
      const step = this._scheme.range[index] - this._scheme.range[index - 1];
      if (taxableIncome < step) {
        annualTax += taxableIncome * (this._scheme.taxRate[index - 1] / 100);
        taxableIncome = 0;
        break;
      }
      annualTax += step * (this._scheme.taxRate[index - 1] / 100);
      taxableIncome -= step;
    }
    if (taxableIncome > 0) {
      annualTax += taxableIncome * (this._scheme.taxRate.slice(-1)[0] / 100);
    }
    return annualTax;
  }
}
