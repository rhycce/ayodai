import Hero from '@/app/ui/components/Hero'
import Features from '@/app/ui/components/Features'
import PageContainer from '@/app/ui/components/PageContainer'
import Collaborations from '@/app/ui/components/Collaborations'

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <Collaborations />
      <Features />
    </PageContainer>
  )
}
