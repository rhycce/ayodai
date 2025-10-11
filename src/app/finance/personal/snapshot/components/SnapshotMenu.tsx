import Container from 'react-bootstrap/Container'
import { Nav, Navbar, NavLink, Row } from 'react-bootstrap'
import { MenuItems } from '@/app/finance/personal/snapshot/components/MenuItems'
import React from 'react'

export default function SnapshotMenu() {
  return (
    <>
      <Navbar>
        <Nav>
          <Container>
            {MenuItems.map((item) => (
              <Row key={item.id}>
                <NavLink
                  href={item.url}
                  className={'capitalize hover:font-bold'}
                >
                  {item.displayName}
                </NavLink>
              </Row>
            ))}
          </Container>
        </Nav>
      </Navbar>
    </>
  )
}
