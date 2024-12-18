import React from 'react'
export default function Section({
  children,
  className,
  id,
  crosses,
  customPaddings,
}: Readonly<{
  children: React.ReactNode
  id: string
  className?: string
  crosses?: string
  customPaddings?: string
}>) {
  return (
    <div
      id={id}
      className={`relative ${customPaddings || 'py-10 lg:py-16 xl:py-20'} ${crosses ? 'lg:py-32 xl:py-40' : ''} ${className || ''} border-bottom`}
    >
      {children}
    </div>
  )
}
