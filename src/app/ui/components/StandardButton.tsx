import { Button } from 'react-bootstrap'
import React from 'react'

export default function StandardButton({
  onClick,
  children,
  px,
  className,
  variant,
  href,
  size
}: Readonly<{
  onClick: () => void
  children: React.ReactNode
  px?: string
  className?: string
  variant?: string
  href?: string
  size?:'sm'|'lg'
}>) {
  const classes = `${px || ''} ${className || ''}`
  return (
    <div>
      <Button
        variant={variant ? variant : 'light'}
        className={classes}
        onClick={!href ? onClick : () => {}}
        href={href}
        size={size}
      >
        <span>{children}</span>
      </Button>
    </div>
  )
}
