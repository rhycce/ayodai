export interface Mortgage{
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
    extraPayment?:number,
}

export enum CreditScore{
    '740+' ,
    '720 - 739' ,
    '700 - 718' ,
    '680 - 699' ,
    '660 - 679' ,
    '< 660'
}