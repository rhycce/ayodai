import React from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {LayoutNavigationComponent} from "@/app/ui/common/LayoutNavigationComponent";
export function HeaderComponent() {
    return (
        <Container>
            <Row>
                <Col>
                    <LayoutNavigationComponent/>
                </Col>
            </Row>
        </Container>
    )
}

