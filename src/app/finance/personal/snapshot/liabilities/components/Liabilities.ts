export interface Liability{
  label: 'asset'
  id: string,
  name: string,
  description: string,
  value: number,
  type: LiabilityType
  apr?: number,
  contribution?: Contribution
}

export interface Contribution{
  amount: number,
  rate: 'weekly'|'monthly'| 'annually'
}

export type LiabilityType = 'Mortgage' | 'Car Note' | 'Student Loan' | 'Personal Loan' | 'Credit Card' | 'Other'

export function describeLiabilityAccount(liability: Liability): string {
  return 'current'
}