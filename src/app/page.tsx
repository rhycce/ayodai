import PageContainer from '@/app/pages/PageContainer'
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap'
import { AyodaiDescriptionComponent } from '@/app/ui/components/AyodaiDescriptionComponent'

export default function Home() {
  return (
    <PageContainer>
      <AyodaiDescriptionComponent />
    </PageContainer>
  )
}
