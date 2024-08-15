import Container from "react-bootstrap/Container";
import {
    Col, Image, Row,
} from "react-bootstrap";
import React from "react";
import Link from "next/link";
const GoalImage = "Firefly personal development goals 9927.jpg"

export function AyodaiDescriptionComponent(){
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                         fill="currentColor" className="bi bi-github"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                    </svg>
                                </center>
                            </div>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>

    )
}
