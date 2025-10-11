'use client'
import SnapshotView from '@/app/finance/personal/snapshot/components/SnapshotView'
import SnapshotBreakdown from '@/app/finance/personal/snapshot/components/SnapshotBreakdown'
import FinanceSnapshotOutline from '@/app/finance/personal/snapshot/components/FinanceSnapshotOutline'
import AccountList from '@/app/finance/personal/snapshot/components/AccountList'
import { useState } from 'react'

export default function LiabilitiesSnapshotPage() {
const [liabilities, setLiabilities] = useState([])
  return (
    <FinanceSnapshotOutline
      viewId={'liabilitiesSnapshotView'}
      breakdownId={'liabilitiesSnapshotBreakdown'}
      viewChildren={<SnapshotView />}
      breakdownChildren={
        <SnapshotBreakdown
          accountList={<AccountList liabilities={liabilities}/>}
          title={'Asset Accounts'}
          actionButton={<div></div>}
        />
      }
    />
  )
}