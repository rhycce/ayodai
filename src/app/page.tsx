import Hero from '@/app/ui/components/Hero'
import Features from '@/app/ui/components/Features'
import PageContainer from '@/app/ui/components/PageContainer'
import Integrations from '@/app/ui/components/Integrations'

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <Integrations />
      <Features />
    </PageContainer>
  )
}
