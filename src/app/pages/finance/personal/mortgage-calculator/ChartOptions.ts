export const ChartOptionsList: IChartOptions[] = [
    {
        key: 'principalInterest',
        label: 'Principal & Interest',
        color: '#BBCCEE'
    },
    {
        key: 'pmi',
        label: 'PMI',
        color: '#CCEEFF'
    },
    {
        key: 'propertyTax',
        label: 'Property taxes',
        color: '#CCDDAA'
    },
    {
        key: 'hoaFees',
        label: 'HOA Fees',
        color: '#EEEEBB'
    },
    {
        key: 'homeOwnerInsurance',
        label: 'Homeowner&apos;s insurance',
        color: '#DDDDDD'
    },
]

export interface IChartOptions{
    key: string,
    label: string,
    color: string
}

export function generateLabelAndColors(){
    const colors: string[] = []
    const labels: string[] = [];
    for (let i = 0; i < ChartOptionsList.length; i++) {
        colors[i] = ChartOptionsList[i].color
        labels[i] = ChartOptionsList[i].label
    }
    return{
        colors,
        labels
    }
}