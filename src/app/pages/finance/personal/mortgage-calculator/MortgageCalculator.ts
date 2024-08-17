export interface Mortgage {
    amount: number,
    downPaymentAmount: number,
    downPaymentPercentage: number,
    term: number,
    interestRate: number,
    zipCode: number,
    extraPrinciplePayment?: number,
    pmi?: number,
    creditScore?: CreditScore,
    propertyTax?: number,
    hoaFees?: number,
    homeOwnersInsurance?: number,
    updateAmount?: (value: string) => void,
    updatePaymentAmount?: (value: string) => void,
    updatePaymentPercentage?: (value: string) => void,
    updateTerm?: (value: string) => void,
    updateCreditScore?: (value: string) => void,
    updateZipcode?: (value: string) => void,
    updateHomeOwnersInsurance?: (value: string) => void,
    updateHoaFees?: (value: string) => void,
    updateInterestRate?: (value: string) => void,
    updatePropertyTax?: (value: string) => void,
    updateExtraPayment?: (value: string) => void,
    updatePmi?: (value: string) => void
}

export enum CreditScore {
    '740+',
    '720 - 739',
    '700 - 718',
    '680 - 699',
    '660 - 679',
    '< 660'
}

export function numberToTwoDecimalPlaces(value: number | undefined): string {
    if (value)
        return value.toFixed(2)
    return '0'
}

export interface MonthlyBreakdown{
    total: number,
    principalInterest: number,
    propertyTax: number,
    homeOwnerInsurance: number,
    pmi: number,
    hoaFees: number,
}

export interface AmortizationSummary {
    principal: number,
    interest: number,
    total: number,
    payOffMonth: number,
    payOffYear: number
}


export function calculateMonthlyBreakdown(x:Mortgage):MonthlyBreakdown{
    const principalInterest = calculateMonthlyPayment(x);
    const total = principalInterest +
        (x.pmi? x.pmi: 0) +
        (x.homeOwnersInsurance? x.homeOwnersInsurance: 0) +
        (x.hoaFees? x.hoaFees: 0) +
        (x.propertyTax? x.propertyTax: 0)

    return {
        total,
        principalInterest,
        propertyTax: (x.propertyTax? x.propertyTax: 0),
        homeOwnerInsurance: (x.homeOwnersInsurance? x.homeOwnersInsurance: 0),
        pmi: (x.pmi? x.pmi: 0),
        hoaFees: (x.hoaFees? x.hoaFees: 0),
    }
}

export function calculateAmortizationSummary(x:Mortgage):AmortizationSummary{
    const principal = x.amount - x.downPaymentPercentage
    const interest = (principal * x.interestRate * x.term)/100;
    const total = principal + interest;
    const date = new Date();
    const payOffMonth = date.getMonth();
    const payOffYear = date.getFullYear() + x.term
    return {
        principal,
        interest,
        total,
        payOffMonth,
        payOffYear,
    }
}

function calculateMonthlyPayment(x:Mortgage){
    const interest = x.interestRate/12
    const principal = x.amount - x.downPaymentAmount
    const numOfPayments = x.term * 12
    const interestExp = Math.pow(interest+1, numOfPayments)
    return (principal * interest * interestExp) / (interestExp - 1);
}