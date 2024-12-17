import Container from "react-bootstrap/Container";
import {
    Col, Image, Row,
} from "react-bootstrap";
import React from "react";
import Link from "next/link";
import {Icons} from "@/app/ui/components/Icons";
const GoalImage = "Firefly personal development goals 9927.jpg"

export function Description(){
    return (
        <Container className={'my-3'}>
            <Row>
                <Col>
                    <Image src={GoalImage} alt={'Personal Goal Image'} title={'Personal Goal Image'}/>
                    <cite title="Adobe Firefly"><small>Image by Adobe Firefly</small></cite>
                </Col>
                <Col>
                    <Container className={'h-full'}>
                        <Row className={'h-1/2 place-content-center'}>
                            <center>
                                <p></p>
                                <blockquote className={'blockquote m-4'}>
                                    <p>
                                        {' '}
                                        &quot;Success is focusing the full power of all you are on what you have a
                                        burning
                                        desire to
                                        achieve.&quot; {' '}
                                    </p>
                                    <footer className={'blockquote-footer'}>
                                        <cite title="Wilfred Peterson">Wilfred Peterson</cite>
                                    </footer>
                                </blockquote>
                            </center>
                        </Row>
                        <Row>
                            <div className={'text-center'}>
                                <b>ayodai</b> is a personal planner project by <Link href={'https://github.com/rhycce'}>J.
                                Vanderpuye</Link> to break goals into chunks and plan actionable items for personal
                                development.
                                And the underlying goal for this project is to expand my knowledge of React + Typescript
                                + Github while
                                I journey through the world of web app development.
                                Follow its progress on
                                <center>
                                    {Icons.github}
                                </center>
                            </div>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>

    )
}
