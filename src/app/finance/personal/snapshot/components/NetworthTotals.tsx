import { Col } from 'react-bootstrap'
import SnapshotTotalValueCard from '@/app/finance/personal/snapshot/components/SnapshotTotalValueCard'

export default function NetworthTotal({
  assetTotal,
  liabilityTotal,
  netWorth,
}: {
  assetTotal: number
  liabilityTotal: number
  netWorth: number
}) {
  return (
    <>
      <Col>
        <SnapshotTotalValueCard
          value={assetTotal}
          label={'Assets'}
          currency={'$'}
        />
      </Col>
      <Col className={'text-center p-0 m-0 bg-red'}>
        <h1> - </h1>
      </Col>
      <Col>
        <SnapshotTotalValueCard
          value={liabilityTotal}
          label={'Liabilities'}
          currency={'$'}
        />
      </Col>
      <Col className={'text-center p-0 m-0'}>
        <h1> = </h1>
      </Col>
      <Col>
        <SnapshotTotalValueCard
          value={netWorth}
          label={'Net Worth'}
          currency={'$'}
        />
      </Col>
    </>
  )
}
