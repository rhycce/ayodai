import { generateUUID } from '@/app/lib/Utilities'

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

export function describeAssetAccount(asset: Asset): string {
  return 'current'
}
export interface AssetAction {
  type: 'add' | 'modify' | 'delete'
  id: string
  asset: Asset
}
export function assetReducer(assets: Asset[], action: AssetAction) {
  switch (action.type) {
    case 'add': {
      action.asset.id = generateUUID()
      return [...assets, action.asset]
    }
    case 'modify': {
      return assets.map((asset) => {
        if (asset.id === action.asset.id) {
          return action.asset
        } else {
          return asset
        }
      })
    }
    case 'delete': {
      return assets.filter((asset) => asset.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
