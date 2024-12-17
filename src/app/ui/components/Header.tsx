import React from 'react'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'
import { LayoutNavigationComponent } from '@/app/ui/components/LayoutNavigationComponent'
export function Header() {
  return (
    <div
      className={
        'fixed top-0 z-50 backdrop-blur-sm border-b border-neutral-400 lg:backdrop-blur-sm'
      }
    >
      <LayoutNavigationComponent />
    </div>
  )
}
