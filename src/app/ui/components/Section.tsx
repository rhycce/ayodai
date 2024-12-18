import React from 'react'
export default function Section({
  children,
  className,
  id,
}: Readonly<{
  children: React.ReactNode
  id: string
  className?: string
}>) {
  return (
    <div id={id} className={` ${className || ''} border-bottom`}>
      {children}
    </div>
  )
}
