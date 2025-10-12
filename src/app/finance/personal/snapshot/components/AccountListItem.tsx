import {
  Asset,
  AssetAction,
  describeAssetAccount,
} from '@/app/finance/personal/snapshot/assets/components/Asset'
import {
  describeLiabilityAccount,
  Liability,
  LiabilityAction,
} from '@/app/finance/personal/snapshot/liabilities/components/Liabilities'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'
import AccountBalance from '@/app/finance/personal/snapshot/components/AccountBalance'
import AccountIcon from '@/app/finance/personal/snapshot/components/AccountIcon'
import { Dispatch } from 'react'

export default function AccountListItem({
  accountDetails,
}: {
  accountDetails: Asset | Liability
  dispatchMethod: Dispatch<AssetAction> | Dispatch<LiabilityAction>
}) {
  const isAsset = isInstanceOfAsset(accountDetails)
  return (
    <Container className={'border-top py-2 hover:shadow-md content-evenly'}>
      <Row>
        <Col md="auto" className={'place-content-center'}>
          <AccountIcon type={accountDetails.type} isAsset={isAsset} />
        </Col>
        <Col className={'place-content-center'}>{accountDetails.name}</Col>
        <Col md="auto" className={'place-content-center'}>
          <AccountBalance
            isAsset={isAsset}
            currency={'$'} //todo: set this to global preference
            value={accountDetails.value}
            label={
              isAsset
                ? describeAssetAccount(accountDetails as Asset)
                : describeLiabilityAccount(accountDetails as Liability)
            }
          />
        </Col>
      </Row>
    </Container>
  )
}

function isInstanceOfAsset(accountDetails: Asset | Liability): boolean {
  return accountDetails.label === 'asset'
}
