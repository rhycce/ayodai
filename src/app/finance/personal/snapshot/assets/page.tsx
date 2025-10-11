'use client'
import SnapshotView from '@/app/finance/personal/snapshot/components/SnapshotView'
import SnapshotBreakdown from '@/app/finance/personal/snapshot/components/SnapshotBreakdown'
import FinanceSnapshotOutline from '@/app/finance/personal/snapshot/components/FinanceSnapshotOutline'
import { useState } from 'react'
import AccountList from '@/app/finance/personal/snapshot/components/AccountList'

export default function AssetsSnapshotPage() {
  const [assets, setAssets] = useState([])
  return (
    <FinanceSnapshotOutline
      viewId={'assetsSnapshotView'}
      breakdownId={'assetsSnapshotBreakdown'}
      viewChildren={<SnapshotView />}
      breakdownChildren={
        <SnapshotBreakdown
          accountList={<AccountList assets={assets} />}
          title={'Asset Accounts'}
          actionButton={<div></div>}
        />
      }
    />
  )
}
