import PageContainer from '@/app/ui/components/PageContainer'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'
import Section from '@/app/ui/components/Section'
import SnapshotMenu from '@/app/finance/personal/snapshot/components/SnapshotMenu'
import { ReactNode } from 'react'

export default function FinanceSnapshotOutline({viewId, breakdownId, viewChildren, breakdownChildren}:{ viewId: string, breakdownId: string, viewChildren: ReactNode, breakdownChildren: ReactNode}) {
  return (
    <PageContainer>
      <Container>
        <Row>
          <Col>
            <Section
              id={'snapshotMenu'}
              className={`px-0 my-5`}
              border={'border-right'}
            >
              <SnapshotMenu />
            </Section>
          </Col>
          <Col md={2}>
            <Section id={viewId} className={`px-0 my-5`}>
              {viewChildren}
            </Section>
          </Col>
          <Col>
            <Section
              id={breakdownId}
              className={`px-0 my-5`}
              border={'border-left'}
            >
              {breakdownChildren}
            </Section>
          </Col>
        </Row>
      </Container>
    </PageContainer>
  )
}
