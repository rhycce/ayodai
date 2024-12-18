import { Card, CardBody, CardTitle } from 'react-bootstrap'
import React from 'react'
import Link from 'next/link'

export function ContentLogoCardComponent({
  icon,
  name,
  url,
}: Readonly<{
  name: string
  url: string
  icon: React.ReactNode
}>) {
  return (
    <Card className={'text-center max-w-64 shadow'}>
      <CardBody>
        <Link href={url}>
          <center>{icon}</center>
        </Link>
        <CardTitle className={'text-3xl'}>{name}</CardTitle>
      </CardBody>
    </Card>
  )
}
