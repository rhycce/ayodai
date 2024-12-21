'use client'
import Section from '@/app/ui/components/Section'
import Container from 'react-bootstrap/Container'
import { Card, CardBody, CardTitle } from 'react-bootstrap'
import { FeatureCardData } from '@/app/ui/constants/Index'
import Link from 'next/link'
import Icon from '@/app/ui/components/Icon'
const rightArraowHeadPath = 'right-arrow-svgrepo-com.svg'
export default function Features() {
  return (
    <Section id={'features'} className={'px-2.5'}>
      <Container fluid={'md mt-2.5 lg:mt-5 xl:mt-7.5 px-0'}>
        <div className={'my-5'}>
          <span className={`text-center`}>
            <h1>Work smarter, not harder with Ayodai</h1>
          </span>
        </div>
        <div className={'flex flex-wrap'}>
          {FeatureCardData.map((dataObject) => (
            <div
              key={dataObject.id}
              className={`${dataObject.displayOnMobile}`}
            >
              <Card
                style={{
                  minWidth: '18rem',
                  maxWidth: '24rem',
                }}
                className={`hover:shadow-2xl m-2.5 rounded`}
              >
                <Link
                  href={dataObject.url}
                  className={`no-underline text-black`}
                >
                  <CardBody className={`flex flex-col`}>
                    <div className={`h-3/4`}>
                      <CardTitle> {dataObject.title}</CardTitle>
                      <CardBody>
                        <div className={`lg:h-28`}>{dataObject.content}</div>
                      </CardBody>
                    </div>

                    <div
                      className={`flex flex-row place-content-between pt-2.5`}
                    >
                      <div className={`w-1/4`}>
                        <Icon src={dataObject.actionIcon} height={'30'} />
                      </div>
                      <div>
                        <div className={`flex`}>
                          <span
                            className={`text-xs uppercase bold place-content-center`}
                          >
                            Explore more
                          </span>
                          <Icon src={rightArraowHeadPath} height={'30'} />
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Link>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
