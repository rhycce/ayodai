import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap'
import { ReactNode } from 'react'
export default function SnapshotBreakdown({
  title,
  accountList,
  actionButton,
}: {
  title: string
  accountList: ReactNode
  actionButton: ReactNode
}) {
  return (
    <>
      <Container>
        <Row>
          <h3 className={'px-5'}>{title}</h3>
        </Row>
        <Row>{accountList}</Row>
        {actionButton}
      </Container>
    </>
  )
}
