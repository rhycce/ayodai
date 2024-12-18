import Container from 'react-bootstrap/Container'
import { Col, Image, Row } from 'react-bootstrap'
import React from 'react'
import { Icons } from '@/app/ui/components/Icons'
const GoalImage = '../../../Firefly personal development goals 9927.jpg'

export function UnderConstructionComponent() {
  return (
    <Container className={'my-3'}>
      <Row>
        <Col>
          <Image
            src={GoalImage}
            alt={'Personal Goal Image'}
            title={'Personal Goal Image'}
          />
          <cite title="Adobe Firefly">
            <small>Image by Adobe Firefly</small>
          </cite>
        </Col>
        <Col>
          <Container className={'h-full place-content-center'}>
            <div className={'text-center'}>
              <i className={'lg:3'}>Hang tight.</i>
              <h1>A NEW FEATURE IS COMING!</h1>
              <div className={'text-center'}>
                <b>ayodai</b> devs are working hard to bring you this exciting
                new feature. Follow our progress on
                <center>{Icons.github}</center>
              </div>
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}
