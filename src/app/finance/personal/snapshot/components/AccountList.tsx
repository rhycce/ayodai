import {
  Asset,
  AssetAction,
} from '@/app/finance/personal/snapshot/assets/components/Asset'
import {
  Liability,
  LiabilityAction,
} from '@/app/finance/personal/snapshot/liabilities/components/Liabilities'
import AccountListItem from '@/app/finance/personal/snapshot/components/AccountListItem'
import { Dispatch } from 'react'

export default function AccountList({
  assets,
  liabilities,
  assetDispatch,
  liabilityDispatch,
}: {
  assets?: Asset[]
  liabilities?: Liability[]
  liabilityDispatch?: Dispatch<LiabilityAction>
  assetDispatch?: Dispatch<AssetAction>
}) {
  const accounts = [...(assets ?? []), ...(liabilities ?? [])].sort(
    (a, b) => a.value - b.value
  )
  return (
    <div>
      {accounts.map((account) => (
        <AccountListItem
          accountDetails={account}
          key={account.id}
          dispatchMethod={
            account.label === 'asset' ? assetDispatch! : liabilityDispatch!
          }
        />
      ))}
    </div>
  )
}
