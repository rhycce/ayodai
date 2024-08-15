import Container from 'react-bootstrap/Container';
import {HeaderComponent} from "@/app/ui/common/HeaderComponent";
import {Row} from "react-bootstrap";
import {CopyrightComponent} from "@/app/ui/common/CopyrightComponent";

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
            </Container>
            <CopyrightComponent/>
        </main>
    )
}