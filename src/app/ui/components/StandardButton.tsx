
import { Button } from 'react-bootstrap'
import React from 'react'

export default function StandardButton({
  onClick,
  children,
  px,
  className,
}: Readonly<{
  onClick: () => void
  children: React.ReactNode
  px?: string
  className?: string
  variant?: string
}>) {
  const classes = `${px || ''} ${className || ''}`
  return (
    <div>
      <Button variant="light" className={classes} onClick={onClick}>
        <span>{children}</span>
      </Button>
    </div>
  )
}
