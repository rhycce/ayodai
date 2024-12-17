import React from 'react'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavLink,
  Row,
} from 'react-bootstrap'
import { Logo } from '@/app/ui/components/Icons'
import { NavItemObjectData } from '@/app/ui/constants/Index'
import Container from 'react-bootstrap/Container'
export function Header() {
  return (
    <Navbar
      expand={'lg'}
      className={'backdrop-blur-sm lg:backdrop-blur-sm border-b'}
    >
      <Container>
        <NavbarBrand href={'/'}>
          <Logo height="55px" width="230px" fill={'none'} />
        </NavbarBrand>
        <NavbarToggle aria-controls={'main-navbar-nav'} />
        <NavbarCollapse id={'main-navbar-nav'}>
          <Nav className={'justify-content-end flex-grow-1 pe-3'}>
            {NavItemObjectData.map((data) => (
              <NavLink
                key={data.id}
                href={data.url}
                className={'hover:font-extrabold'}
              >
                {data.title}
              </NavLink>
            ))}
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}
