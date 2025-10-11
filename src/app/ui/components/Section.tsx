import React from 'react'
export default function Section({
  children,
  className,
  id,
  border = 'border-bottom',
}: Readonly<{
  children: React.ReactNode
  id: string
  className?: string
  border?: string
}>) {
  return (
    <div id={id} className={` ${className || ''} ${border}`}>
      {children}
    </div>
  )
}
