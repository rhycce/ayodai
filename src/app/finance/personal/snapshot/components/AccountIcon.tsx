import { IconList } from '@/app/lib/Icons'
import Icon from '@/app/ui/components/Icon'

export default function AccountIcon({
  type,
  isAsset,
}: {
  type: string
  isAsset: boolean
}) {
  let source: string
  switch (type) {
    case 'Mortgage':
      source = IconList.houseNegativeIcon
      break
    case 'Car Note':
    case 'Student Loan':
    case 'Personal Loan':
    case 'Credit Card':
      source = IconList.cashGiveIcon
      break
    case 'Real Estate - Residential':
    case 'Real Estate - Commercial':
    case 'Personal Effects':
    case 'Motor Vehicle':
      source = IconList.housePositiveIcon
      break
    case 'Bank/Savings Account':
    case 'Investment Account/Bonds/Stocks':
    case 'Life Insurance':
    case 'Annuities':
    case 'Retirement Account':
    case 'Business Interest':
    case 'Rental Income':
    case 'Promissory Notes':
      source = IconList.cashRecieveIcon
      break
    default:
      source = isAsset ? IconList.cashRecieveIcon : IconList.cashGiveIcon
  }

  return <Icon src={source} height={'30'} width={'30'} />
}
