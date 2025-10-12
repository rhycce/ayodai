'use client'
import SnapshotView from '@/app/finance/personal/snapshot/components/SnapshotView'
import SnapshotBreakdown from '@/app/finance/personal/snapshot/components/SnapshotBreakdown'
import FinanceSnapshotOutline from '@/app/finance/personal/snapshot/components/FinanceSnapshotOutline'
import { useReducer} from 'react'
import AccountList from '@/app/finance/personal/snapshot/components/AccountList'
import { assetReducer } from '@/app/finance/personal/snapshot/assets/components/Asset'
import { initialAssets } from '@/app/lib/DemoData'

export default function AssetsSnapshotPage() {
  const [assets, dispatch] = useReducer(assetReducer, initialAssets)
  return (
    <FinanceSnapshotOutline
      viewId={'assetsSnapshotView'}
      breakdownId={'assetsSnapshotBreakdown'}
      viewChildren={<SnapshotView assets={assets} />}
      breakdownChildren={
        <SnapshotBreakdown
          accountList={<AccountList assets={assets} assetDispatch={dispatch} />}
          title={'Asset Accounts'}
          actionButton={<div></div>}
        />
      }
    />
  )
}
