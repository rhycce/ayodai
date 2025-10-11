import SnapshotView from '@/app/finance/personal/snapshot/components/SnapshotView'
import SnapshotBreakdown from '@/app/finance/personal/snapshot/components/SnapshotBreakdown'
import FinanceSnapshotOutline from '@/app/finance/personal/snapshot/components/FinanceSnapshotOutline'

export default function FinanceSnapshotPage() {
  return (
    <FinanceSnapshotOutline
      viewId={'snapshotView'}
      breakdownId={'snapshotBreakdown'}
      viewChildren={<SnapshotView />}
      breakdownChildren={<SnapshotBreakdown />}
    />
  )
}
