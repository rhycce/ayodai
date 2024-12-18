import { Button } from 'react-bootstrap'
import React from 'react'

export default function StandardButton({
  onClick,
  children,
  className,
  href,
  textClassName,
}: Readonly<{
  onClick: () => void
  children: React.ReactNode
  className?: string
  href?: string
  textClassName?: string
}>) {
  const classes = `button inline-block ${className || ''}`
  const spanClasses = `block ${textClassName || ''}`
  return href
    ? renderLink(href, classes, spanClasses, children)
    : renderButton(classes, spanClasses, children, onClick)
}

function renderButton(
  classes: string,
  spanClasses: string,
  children: React.ReactNode,
  onClick: () => void
) {
  return (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  )
}
function renderLink(
  href: string,
  classes: string,
  spanClasses: string,
  children: React.ReactNode
) {
  return (
    <Button href={href} className={classes}>
      <span className={spanClasses}>{children}</span>{' '}
    </Button>
  )
}
