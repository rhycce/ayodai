import { Asset } from '@/app/finance/personal/snapshot/assets/components/Asset'
import { Liability } from '@/app/finance/personal/snapshot/liabilities/components/Liabilities'
import {  Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import NetworthTotal from '@/app/finance/personal/snapshot/components/NetworthTotals'
import NetworthGraph from '@/app/finance/personal/snapshot/components/NetworthGraph'

export default function SnapshotView({
  assets,
  liabilities,
}: {
  assets?: Asset[]
  liabilities?: Liability[]
}) {
  let assetTotal = 0
  if (assets) {
    assets.forEach((asset) => (assetTotal += asset.value))
  }
  let liabilityTotal = 0
  if (liabilities) {
    liabilities.forEach((liability) => (liabilityTotal += liability.value))
  }
  const netWorth = assetTotal - liabilityTotal
  //todo: use user's global currency
  return (
    <div>
      <div className={'pt-1 px-3 border-b'}>
        <h3>Overview</h3>
      </div>
      <Container className={'pt-3'}>
        <Row className={'p-2'}>
          <NetworthTotal
            assetTotal={assetTotal}
            liabilityTotal={liabilityTotal}
            netWorth={netWorth}
          />
        </Row>
        <Row className={'p-2'}>
          <NetworthGraph
            assetTotal={assetTotal}
            liabilityTotal={liabilityTotal}
            netWorth={netWorth}
          />
        </Row>
      </Container>
    </div>
  )
}
