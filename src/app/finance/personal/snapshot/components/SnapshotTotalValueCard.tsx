import { Card, CardBody, CardSubtitle } from 'react-bootstrap'
import { formatNumber } from 'chart.js/helpers'

export default function SnapshotTotalValueCard({
  value,
  label,
  currency,
}: {
  value: number
  label: string
  currency: string
  description?: string
}) {
  return (
    <Card className={'shadow-xl mb-2'}>
      <CardBody>
        <CardSubtitle>{label}</CardSubtitle>
        <div className={'text-center whitespace-nowrap'}>
          <p className={'text-3xl p-2'}>
            {currency} {formatNumber(value, 'en-US')}
          </p>
        </div>
      </CardBody>
    </Card>
  )
}
