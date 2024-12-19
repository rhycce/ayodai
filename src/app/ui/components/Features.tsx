'use client'
import Section from '@/app/ui/components/Section'
import Container from 'react-bootstrap/Container'
import { Card, CardBody, CardLink, CardTitle } from 'react-bootstrap'
import { FeatureCardData } from '@/app/ui/constants/Index'
import { RightArrowHead } from '@/app/ui/components/Icons'

export default function Features() {
  return (
    <Section id={'features'} className={'px-2.5'}>
      <Container fluid={'md mt-2.5 lg:mt-5 xl:mt-7.5 px-0'}>
        <div>
          <span className={`text-center shadow`}>
            <h1>Work smarter, not harder with Ayodai</h1>
          </span>
        </div>
        <div className={'flex flex-wrap justify-center '}>
          {FeatureCardData.map((dataObject) => (
            <Card
              key={dataObject.id}
              style={{ minWidth: '18rem' }}
              className={`md:w-1/3 lg:w-1/4 shadow m-2.5 rounded`}
            >
              <CardBody className={`flex flex-col`}>
                <div className={`h-3/4`}>
                  <CardTitle> {dataObject.title}</CardTitle>
                  <CardBody>{dataObject.content}</CardBody>
                </div>

                <div className={`flex flex-row place-content-between pt-2.5`}>
                  <div className={`w-1/4`}></div>
                  <div>
                    <CardLink
                      href={dataObject.url}
                      className={'no-underline hover:font-bold text-black  '}
                    >
                      <div className={`flex`}>
                        <span
                          className={`text-xs uppercase bold place-content-center`}
                        >
                          Explore more
                        </span>
                        <RightArrowHead className={`h-7`} />
                      </div>
                    </CardLink>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
