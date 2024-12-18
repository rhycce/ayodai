import {
  MonthlyBreakdown,
  numberToTwoDecimalPlaces,
} from '@/app/pages/finance/personal/mortgage-calculator/MortgageCalculator'

export const ChartOptionsList: IChartOptions[] = [
  {
    key: 'principalInterest',
    label: 'Principal & Interest',
    color: '#BBCCEE',
  },
  {
    key: 'pmi',
    label: 'PMI',
    color: '#CCEEFF',
  },
  {
    key: 'propertyTax',
    label: 'Property taxes',
    color: '#CCDDAA',
  },
  {
    key: 'hoaFees',
    label: 'HOA Fees',
    color: '#EEEEBB',
  },
  {
    key: 'homeOwnerInsurance',
    label: `Homeowner's insurance`,
    color: '#DDDDDD',
  },
]

export interface IChartOptions {
  key: string
  label: string
  color: string
}

export function generateLabelAndColors(monthlyPayment: MonthlyBreakdown) {
  const colors: string[] = []
  const labels: string[] = []
  const values: number[] = []
  for (let i = 0; i < ChartOptionsList.length; i++) {
    values[i] = Number(
      numberToTwoDecimalPlaces(monthlyPayment[ChartOptionsList[i].key])
    )
    colors[i] = ChartOptionsList[i].color
    labels[i] = ChartOptionsList[i].label
  }
  return {
    colors,
    labels,
    values,
  }
}
