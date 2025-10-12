'use client'
import SnapshotView from '@/app/finance/personal/snapshot/components/SnapshotView'
import SnapshotBreakdown from '@/app/finance/personal/snapshot/components/SnapshotBreakdown'
import FinanceSnapshotOutline from '@/app/finance/personal/snapshot/components/FinanceSnapshotOutline'
import { useReducer } from 'react'
import { liabilityReducer } from '@/app/finance/personal/snapshot/liabilities/components/Liabilities'
import { initialAssets, initialLiabilities } from '@/app/lib/DemoData'
import { assetReducer } from '@/app/finance/personal/snapshot/assets/components/Asset'
import AccountList from '@/app/finance/personal/snapshot/components/AccountList'

export default function FinanceSnapshotPage() {
  const [liabilities, liabilityDispatch] = useReducer(
    liabilityReducer,
    initialLiabilities
  )
  const [assets, assetDispatch] = useReducer(assetReducer, initialAssets)
  return (
    <FinanceSnapshotOutline
      viewId={'snapshotView'}
      breakdownId={'snapshotBreakdown'}
      viewChildren={<SnapshotView assets={assets} liabilities={liabilities} />}
      breakdownChildren={
        <SnapshotBreakdown
          accountList={
            <AccountList
              liabilities={liabilities}
              liabilityDispatch={liabilityDispatch}
              assets={assets}
              assetDispatch={assetDispatch}
            />
          }
          title={'Accounts'}
          actionButton={<div></div>}
        />
      }
    />
  )
}
