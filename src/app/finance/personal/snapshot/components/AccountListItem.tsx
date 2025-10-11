import {
  Asset,
  describeAssetAccount,
} from '@/app/finance/personal/snapshot/assets/components/Asset'
import {
  describeLiabilityAccount,
  Liability,
} from '@/app/finance/personal/snapshot/liabilities/components/Liabilities'
import Container from 'react-bootstrap/Container'
import { Col } from 'react-bootstrap'
import AccountBalance from '@/app/finance/personal/snapshot/components/AccountBalance'
import AccountIcon from '@/app/finance/personal/snapshot/components/AccountIcon'

export default function AccountListItem({
  accountDetails,
}: {
  accountDetails: Asset | Liability
}) {
  const isAsset = isIntanceOfAsset(accountDetails)
  return (
    <Container className={'row-auto'}>
      <Col>
        <AccountIcon type={accountDetails.type}isAsset={isAsset} />
      </Col>
      <Col></Col>
      <Col>
        <AccountBalance
          isAsset={isAsset}
          currency={'$'}//todo: set this to global preference
          value={accountDetails.value}
          label={
            isAsset
              ? describeAssetAccount(accountDetails as Asset)
              : describeLiabilityAccount(accountDetails as Liability)
          }
        />
      </Col>
    </Container>
  )
}

function isIntanceOfAsset(accountDetails: Asset | Liability): boolean {
  return accountDetails.label === 'asset'
}
