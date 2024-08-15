import {Card, CardBody} from "react-bootstrap";
import React from "react";
import Container from "react-bootstrap/Container";
import Link from "next/link";

export function ContentLogoCardComponent({icon, name, url}: Readonly<{
    name: string,
    url: string,
    icon: React.ReactNode;
}>){
    return (
        <Card>
            <CardBody >
                <Container className={'place-content-center'}>
                    <Link href={url}>
                        {icon}
                        <h4>{name}</h4>
                    </Link>
                </Container>
            </CardBody>
        </Card>
    )
}