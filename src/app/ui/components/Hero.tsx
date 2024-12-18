'use client'
import Section from '@/app/ui/components/Section'
import Container from 'react-bootstrap/Container'
import { Image, Row } from 'react-bootstrap'
import React from 'react'
import StandardButton from '@/app/ui/components/StandardButton'
const GoalImage = 'Firefly personal development goals 9927.jpg'

export default function Hero() {
  return (
    <Section id={'hero'} className={`px-0`}>
      <Container fluid={'md mt-2.5 lg:mt-5 xl:mt-7.5 px-0'}>
        <div className={'flex flex-col md:flex-row'}>
          <div className={'mb-2.5 md:w-1/2'}>
            <Container className={'mb-2.5 h-2/3 content-center'}>
              <Row>
                <span>
                  <h1>Break it down.</h1>
                </span>
              </Row>
              <Row className={'text-center'}>
                <span>
                  <h1>Conquer.</h1>
                </span>
              </Row>
              <Row className={'text-right'}>
                <span>
                  <h1>Build it up.</h1>
                </span>
              </Row>
            </Container>
            <div className={'flex flex-row'}>
              <div className={'border-e text-center content-center col-span-5'}>
                <span className={'text-sm md:text-base'}>
                  Join <b>3+ challengers</b> who are using Ayodai to tackle
                  their next project now.
                </span>
              </div>
              <div className={'p-2.5 col'}>
                <StandardButton
                  onClick={() => {}}
                  href={'/features'}
                  className={'shadow rounded btn-secondary'}
                  textClassName={` px-2.5 md:px-5 text-nowrap lg:text-lg`}
                >
                  Get started
                </StandardButton>
              </div>
            </div>
          </div>
          <div className={' md:w-1/2'}>
            <Image
              src={GoalImage}
              alt={'Personal Goal Image'}
              title={'Personal Goal Image'}
              className={`rounded mb-2.5`}
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
