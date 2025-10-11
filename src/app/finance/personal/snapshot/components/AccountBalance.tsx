import { Badge, Stack } from 'react-bootstrap'

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
  return (
    <div>
      <Stack direction={'vertical'} gap={2}>
        <div><b>
          {currency}{isAsset?'':'-'}{value}
        </b></div>
        <Badge pill bg={isAsset ? 'success' : 'danger'}>
          {label}
        </Badge>
      </Stack>
    </div>
  )
}
