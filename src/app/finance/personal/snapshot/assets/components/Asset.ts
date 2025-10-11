export interface Asset {
  label: 'asset'
  id: string
  name: string
  description: string
  value: number
  type: AssetType
  apr?: number
  contribution?: Contribution
}

export interface Contribution {
  amount: number
  rate: 'weekly' | 'monthly' | 'annually'
}

export type AssetType =
  | 'Real Estate - Residential'
  | 'Real Estate - Commercial'
  | 'Personal Effects'
  | 'Motor Vehicle'
  | 'Bank/Savings Account'
  | 'Investment Account/Bonds/Stocks'
  | 'Life Insurance'
  | 'Annuities'
  | 'Retirement Account'
  | 'Business Interest'
  | 'Rental Income'
  | 'Promissory Notes'
  | 'Other'

export function describeAssetAccount(asset: Asset):string{
  return 'current'
}