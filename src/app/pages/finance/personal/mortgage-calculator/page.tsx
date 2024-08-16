import PageContainer from "@/app/pages/PageContainer";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {PageBannerComponent} from "@/app/ui/common/PageBannerComponent";
import {MortgageInputComponent} from "@/app/pages/finance/personal/mortgage-calculator/MortgageInputComponent";

export default function MortgageCalculator(){
    return (
        <PageContainer>
            <Container>
                <Row>
                    <PageBannerComponent text={'Mortgage Calculator'} subText={undefined}/>
                </Row>
                <Row>
                    <Col >
                        <MortgageInputComponent/>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </PageContainer>
    )
}