'use client'
import Section from '@/app/ui/components/Section'
import Container from 'react-bootstrap/Container'
import { Col, Image, Row } from 'react-bootstrap'
import React from 'react'
import StandardButton from '@/app/ui/components/StandardButton'
const GoalImage = 'Firefly personal development goals 9927.jpg'

export default function Hero() {
  return (
    <Section
      id={'hero'}
      className={`pt-[12rem] -mt-5.25`}
      crosses={''}
      crossesOffset={'lg:translate-y[5.25rem]'}
      customPaddings={''}
    >
      <Container>
        <Row>
          <Col className={'mt-5'}>
            <Container className={'h-2/3 '}>
              <Row className={'h-1/3'}>
                <span>
                  <h1>Break it down.</h1>
                </span>
              </Row>
              <Row className={'h-1/3 text-center'}>
                <span>
                  <h1>Conquer.</h1>
                </span>
              </Row>
              <Row className={'h-1/3 text-right'}>
                <span>
                  <h1>Build it up.</h1>
                </span>
              </Row>
            </Container>
            <Container className={'h-1/3 '}>
              <Row className={'h-1/4 place-content-baseline'}>
                <Col className={'w-2/3 border-e'}>
                  <span className={'mb-2.5 '}>
                    Join <b>3+ challengers</b> who are using Ayodai to tackle
                    their next project now.
                  </span>
                </Col>
                <Col className={'w-1/3'}>
                  <StandardButton
                    onClick={() => {}}
                    href={'/features'}
                    className={'shadow '}
                    size={'lg'}
                  >
                    Get started
                  </StandardButton>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Image
              src={GoalImage}
              alt={'Personal Goal Image'}
              title={'Personal Goal Image'}
            />
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
