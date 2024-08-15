
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink} from "react-bootstrap";
import React from "react";
import {AyodaiLogoSVG} from "@/app/ui/common/AyodaiLogoSVG";

export function LayoutNavigationComponent(){
    return (
        <Navbar expand={'lg'} className={'bg-body-tertiary'}>
            <Container>
                <NavbarBrand href={'/'} >
                    <AyodaiLogoSVG/>
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