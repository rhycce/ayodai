import {ContentLogoCardComponent} from "@/app/ui/common/ContentLogoCardComponent";
import {Icons} from "@/app/ui/common/Icons";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

export function PersonalFinanceContentComponent(){
    return (
        <Container>
            <Row>
                <Col>
                    <ContentLogoCardComponent
                        icon={Icons.mortgageCalculator}
                        url={'/pages/finance/personal/mortgage-calculator'}
                        name={'Mortgage calculator'}/>
                </Col>
                <Col>
                    <ContentLogoCardComponent
                        icon={Icons.networthCalculator}
                        url={'/pages/finance/personal/networth-calculator'}
                        name={'Net-worth calculator'}/>
                </Col>
            </Row>
        </Container>
    )
}