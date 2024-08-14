
import Container from "react-bootstrap/Container";
import {Col, Image, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink, Row} from "react-bootstrap";
import React from "react";
const AyodaiLogo =  "ayodai_cropped.png"

export function LayoutNavigationComponent(){
    return (
        <Navbar>
            <Container>
                <NavbarBrand href={'/'}>
                    <Image src={AyodaiLogo} alt={"Ayodai Logo"} title={'Ayodai Logo'} rounded className={'h-20 d-inline-block align-top p-3'} />
                </NavbarBrand>
                <NavbarToggle aria-controls={'main-navbar-nav'}/>
                <NavbarCollapse id={'main-navbar-nav'}>
                    <Nav className={'me-auto'}>
                        <NavLink href={'/pages/finance/personal'}>
                            Personal Finance
                        </NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>

    )
}