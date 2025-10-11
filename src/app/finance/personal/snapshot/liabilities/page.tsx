import SnapshotView from '@/app/finance/personal/snapshot/components/SnapshotView'
import SnapshotBreakdown from '@/app/finance/personal/snapshot/components/SnapshotBreakdown'
import FinanceSnapshotOutline from '@/app/finance/personal/snapshot/components/FinanceSnapshotOutline'

export default function LiabilitiesSnapshotPage() {
  return (
    <FinanceSnapshotOutline
      viewId={'liabilitiesSnapshotView'}
      breakdownId={'liabilitiesSnapshotBreakdown'}
      viewChildren={<SnapshotView />}
      breakdownChildren={<SnapshotBreakdown />}
    />
  )
}