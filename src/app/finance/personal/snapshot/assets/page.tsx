import SnapshotView from '@/app/finance/personal/snapshot/components/SnapshotView'
import SnapshotBreakdown from '@/app/finance/personal/snapshot/components/SnapshotBreakdown'
import FinanceSnapshotOutline from '@/app/finance/personal/snapshot/components/FinanceSnapshotOutline'

export default function AssetsSnapshotPage() {
  return (
    <FinanceSnapshotOutline
      viewId={'assetsSnapshotView'}
      breakdownId={'assetsSnapshotBreakdown'}
      viewChildren={<SnapshotView />}
      breakdownChildren={<SnapshotBreakdown />}
    />
  )
}