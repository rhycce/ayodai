import React from 'react'
import { Button } from 'react-bootstrap'

export default function LinkButton({
  children,
  href,
  px,
  className,
}: Readonly<{
  children: React.ReactNode
  href?: string
  px?: string
  className?: string
  variant?: string
}>) {
  const classes = `${px || ''} ${className || ''}`
  return (
    <div>
      <Button variant="link" className={classes} href={href}>
        <span>{children}</span>
      </Button>
    </div>
  )
}
