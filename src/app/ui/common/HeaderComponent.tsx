import React from "react";
import Container from "react-bootstrap/Container";
import {Col, Row, Image} from "react-bootstrap";
import {LayoutNavigationComponent} from "@/app/ui/common/LayoutNavigationComponent";
import Link from "next/link";
export function HeaderComponent() {
    return (
        <Container>
            <Row >
                <Col>
                    <LayoutNavigationComponent/>
                </Col>
            </Row>
        </Container>
    )
}

