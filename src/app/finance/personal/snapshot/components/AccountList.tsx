import { Asset } from '@/app/finance/personal/snapshot/assets/components/Asset'
import { Liability } from '@/app/finance/personal/snapshot/liabilities/components/Liabilities'
import AccountListItem from '@/app/finance/personal/snapshot/components/AccountListItem'

export default function AccountList({
  assets,
  liabilities,
}: {
  assets?: Asset[]
  liabilities?: Liability[]
}) {
  const accounts = [...(assets ?? []), ...(liabilities ?? [])].sort(
    (a, b) => a.value - b.value
  )
  return (
    <div>
      {accounts.map((account) => (
        <AccountListItem accountDetails={account} key={account.id} />
      ))}
    </div>
  )
}
