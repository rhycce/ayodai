import PageContainer from "@/app/pages/PageContainer";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import {PageBannerComponent} from "@/app/ui/common/PageBannerComponent";
import {PersonalFinanceContentComponent} from "@/app/ui/finance/personal/PersonalFinanceContentComponent";

export default function PersonalFinance(){
    return (
        <PageContainer>
            <Container>
                <Row className={'place-content-center'}>
                    <PageBannerComponent
                        text={'Personal Finance Tools'}
                        subText={'Utilize these calculators to determine affordable monthly payments, how long till debt pay off, evaluate your financial health and more.'}/>
                </Row>
                <Row >
                    <PersonalFinanceContentComponent/>
                </Row>
            </Container>
        </PageContainer>
    );
}
