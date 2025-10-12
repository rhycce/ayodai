import {  Stack } from 'react-bootstrap'

export default function AccountBalance({
  isAsset,
  value,
  currency,
  label,
}: {
  isAsset: boolean
  value: number
  currency: string
  label: string
}) {
  const color = isAsset ? 'green' : 'red'
  return (
    <div>
      <Stack direction={'vertical'} gap={2}>
        <div className={'text-center text-lg'}>
          {currency}
          {isAsset ? '' : '-'}
          {value}
        </div>
        <div
          className={`border-1 border-${color}-600 text-center small bg-${color}-100 rounded-lg m-0`}
        >
          {label}
        </div>
      </Stack>
    </div>
  )
}
