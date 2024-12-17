import React from 'react'
import { Logo } from '@/app/ui/components/Icons'

export function LayoutNavigationComponent() {
  return (
    <div className={`flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4`}>
      <a className={'block w-[12rem] xl:mr-8'} href="#hero">
        <Logo height="40px" width="50px" fill={'none'} />
      </a>
    </div>
  )
}
