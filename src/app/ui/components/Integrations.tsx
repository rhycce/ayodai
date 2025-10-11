import Section from '@/app/ui/components/Section'
import { CollaborationCardData } from '@/app/ui/constants/Index'
import Container from 'react-bootstrap/Container'
import { Image } from 'react-bootstrap'
import { ImageList } from '@/app/lib/Images'

export default function Integrations() {
  return (
    <Section id={'collaborations'} className={`px-0 my-5`}>
      <Container className={`flex flex-col`}>
        <div className={`place-content-center my-2.5 md:my-8 xl:my-15`}>
          <span>
            <h2 className={`text-center text-neutral-600`}>
              Helping people create efficient game-plans at
            </h2>
          </span>
        </div>
        <div className={`flex flex-row place-content-center`}>
          {CollaborationCardData.map((company) => (
            <div
              key={company.id}
              className={`mx-2.5 md:mx-auto my-2.5 md:my-5 sm:w-12 lg:w-24 shadow ${company.displayOnMobile}`}
            >
              <Image src={ImageList.comingSoon} alt={'Coming Soon'} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
