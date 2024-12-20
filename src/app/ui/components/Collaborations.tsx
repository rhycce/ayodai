import Section from '@/app/ui/components/Section'
import { CollaborationCardData } from '@/app/ui/constants/Index'
import Container from 'react-bootstrap/Container'
import { Image } from 'react-bootstrap'
import comingSoon from '@/app/assets/images/coming_soon.jpg'

export default function Collaborations() {
  return (
    <Section id={'collaborations'} className={`px-0 my-5`}>
      <Container className={`flex flex-col`}>
        <div className={`place-content-center my-2.5 md:my-8 xl:my-15`}>
          <span>
            <p
              className={`uppercase text-center text-neutral-600 text-sm md:text-lg`}
            >
              Helping people create efficient game-plans with
            </p>
          </span>
        </div>
        <div className={`flex flex-row place-content-center`}>
          {CollaborationCardData.map((company) => (
            <div
              key={company.id}
              className={`mx-2.5 md:mx-auto my-2.5 md:my-5 sm:w-12 lg:w-24 shadow ${company.displayOnMobile}`}
            >
              <Image src={comingSoon.src} alt={'Coming Soon'} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
