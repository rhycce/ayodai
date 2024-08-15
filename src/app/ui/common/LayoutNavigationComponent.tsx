
import Container from "react-bootstrap/Container";
import {Image, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink} from "react-bootstrap";
import React from "react";
const AyodaiLogo =  "ayodai_cropped.png"

export function LayoutNavigationComponent(){
    return (
        <Navbar expand={'lg'}>
            <Container>
                <NavbarBrand href={'/'} >
                    <Image
                        src={AyodaiLogo}
                        alt={"Ayodai Logo"}
                        title={'Ayodai Logo'}
                        className={'align-top max-h-20'} />
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