import { ContentLogoCardComponent } from '@/app/ui/components/ContentLogoCardComponent'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'
import { IconList } from '@/app/lib/Icons'

export function PersonalFinanceContentComponent() {
  return (
    <Container>
      <Row className={'justify-content-md-center'}>
        <Col xs lg={'4'}>
          <ContentLogoCardComponent
            icon={IconList.ghIcon}
            url={'/pages/finance/personal/mortgage-calculator'}
            name={'Mortgage calculator'}
          />
        </Col>
        <Col xs lg={'4'}>
          <ContentLogoCardComponent
            icon={IconList.ghIcon}
            url={'/pages/finance/personal/networth-calculator'}
            name={'Net worth calculator'}
          />
        </Col>
      </Row>
    </Container>
  )
}
