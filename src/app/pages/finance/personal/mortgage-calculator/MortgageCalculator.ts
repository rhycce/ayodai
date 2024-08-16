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