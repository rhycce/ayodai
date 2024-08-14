import Container from 'react-bootstrap/Container';
import {HeaderComponent} from "@/app/ui/common/HeaderComponent";
import {Row} from "react-bootstrap";

export default function PageContainer({children}){
    return (
        <main>
            <Container>
                <Row>
                    <HeaderComponent/>
                </Row>
                <Row>
                    {children}
                </Row>
                <Row>
                    {/*footer component here*/}
                </Row>
            </Container>
        </main>
    )
}