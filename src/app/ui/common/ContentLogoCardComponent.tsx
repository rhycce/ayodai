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
        <Card className={'content-center'}>
            <CardBody  >
                <Container className={'place-content-center'}>
                    <Link href={url}>
                        {icon}
                        <p className={'text-3xl'}>{name}</p>
                    </Link>
                </Container>
            </CardBody>
        </Card>
    )
}