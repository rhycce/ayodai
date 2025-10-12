import { generateUUID } from '@/app/lib/Utilities'

export interface Liability {
  label: 'liability'
  id: string
  name: string
  description: string
  value: number
  type: LiabilityType
  apr?: number
  contribution?: Contribution
}

export interface Contribution {
  amount: number
  rate: 'weekly' | 'monthly' | 'annually'
}

export type LiabilityType =
  | 'Mortgage'
  | 'Car Note'
  | 'Student Loan'
  | 'Personal Loan'
  | 'Credit Card'
  | 'Other'

export function describeLiabilityAccount(liability: Liability): string {
  return 'current'
}

export interface LiabilityAction {
  type: 'add' | 'modify' | 'delete'
  id: string
  liability: Liability
}
export function liabilityReducer(
  liabilities: Liability[],
  action: LiabilityAction
) {
  switch (action.type) {
    case 'add': {
      action.liability.id = generateUUID()
      return [...liabilities, action.liability]
    }
    case 'modify': {
      return liabilities.map((liability) => {
        if (liability.id === action.liability.id) {
          return action.liability
        } else {
          return liability
        }
      })
    }
    case 'delete': {
      return liabilities.filter((liability) => liability.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
