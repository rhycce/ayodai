import Container from 'react-bootstrap/Container'
import { Header } from '@/app/ui/components/Header'
import { Row } from 'react-bootstrap'
import { CopyrightComponent } from '@/app/ui/components/CopyrightComponent'
import React from 'react'

export default function PageContainer({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <div className={'pt-[4.75rem] lg:pt-5.25rem overflow-hidden'}>
        <Row>
          <Header />
        </Row>
        <Row>{children}</Row>
      </div>
      <CopyrightComponent />
    </main>
  )
}
