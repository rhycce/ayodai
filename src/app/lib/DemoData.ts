import { Asset } from '@/app/finance/personal/snapshot/assets/components/Asset'
import { Liability } from '@/app/finance/personal/snapshot/liabilities/components/Liabilities'

export const initialAssets: Asset[] = [
  {
    id: 'asset1',
    label: 'asset',
    name: 'Checking Account',
    description: 'General',
    value: 100,
    type: 'Bank/Savings Account',
  },
  {
    id: 'asset2',
    label: 'asset',
    name: 'Saving Account',
    description: 'General',
    value: 200,
    type: 'Bank/Savings Account',
  },
  {
    id: 'asset3',
    label: 'asset',
    name: 'Primary Home',
    description: 'General',
    value: 1000,
    type: 'Real Estate - Residential',
  },
]

export const initialLiabilities: Liability[] = [
  {
    id: 'liability1',
    label: 'liability',
    name: 'Credit Card',
    description: 'General',
    value: 100,
    type: 'Credit Card',
  },
  {
    id: 'liability2',
    label: 'liability',
    name: 'Car Note',
    description: 'General',
    value: 200,
    type: 'Car Note',
  },
  {
    id: 'liability3',
    label: 'liability',
    name: 'Mortgage',
    description: 'General',
    value: 10000,
    type: 'Mortgage',
  },
]
