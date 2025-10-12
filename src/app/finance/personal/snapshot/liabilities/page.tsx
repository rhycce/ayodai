'use client'
import SnapshotView from '@/app/finance/personal/snapshot/components/SnapshotView'
import SnapshotBreakdown from '@/app/finance/personal/snapshot/components/SnapshotBreakdown'
import FinanceSnapshotOutline from '@/app/finance/personal/snapshot/components/FinanceSnapshotOutline'
import AccountList from '@/app/finance/personal/snapshot/components/AccountList'
import { useReducer } from 'react'
import { liabilityReducer } from '@/app/finance/personal/snapshot/liabilities/components/Liabilities'
import { initialLiabilities } from '@/app/lib/DemoData'

export default function LiabilitiesSnapshotPage() {
  const [liabilities, dispatch] = useReducer(
    liabilityReducer,
    initialLiabilities
  )
  return (
    <FinanceSnapshotOutline
      viewId={'liabilitiesSnapshotView'}
      breakdownId={'liabilitiesSnapshotBreakdown'}
      viewChildren={<SnapshotView liabilities={liabilities} />}
      breakdownChildren={
        <SnapshotBreakdown
          accountList={
            <AccountList
              liabilities={liabilities}
              liabilityDispatch={dispatch}
            />
          }
          title={'Asset Accounts'}
          actionButton={<div></div>}
        />
      }
    />
  )
}
