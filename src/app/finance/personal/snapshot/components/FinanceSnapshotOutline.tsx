import PageContainer from '@/app/ui/components/PageContainer'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'
import Section from '@/app/ui/components/Section'
import SnapshotMenu from '@/app/finance/personal/snapshot/components/SnapshotMenu'
import { ReactNode } from 'react'

export default function FinanceSnapshotOutline({
  viewId,
  breakdownId,
  viewChildren,
  breakdownChildren,
}: {
  viewId: string
  breakdownId: string
  viewChildren: ReactNode
  breakdownChildren: ReactNode
}) {
  return (
    <PageContainer>
      <Container>
        <Row>
          <Col md={'auto'}>
            <Section id={'snapshotMenu'} className={`px-0 my-5`}>
              <SnapshotMenu />
            </Section>
          </Col>
          <Col>
            <Section id={viewId} className={`px-0 my-5`}>
              {viewChildren}
            </Section>
          </Col>
          <Col md={'auto'}>
            <Section id={breakdownId} className={`px-0 my-5`}>
              {breakdownChildren}
            </Section>
          </Col>
        </Row>
      </Container>
    </PageContainer>
  )
}
