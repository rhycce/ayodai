import {
    calculateMonthlyBreakdown,
    Mortgage,
    numberToTwoDecimalPlaces
} from "@/app/pages/finance/personal/mortgage-calculator/MortgageCalculator";
import Container from "react-bootstrap/Container";
import {Col, Row, Tab, Tabs} from "react-bootstrap";
import {IChartData} from "@/app/ui/charts/ChartData";
import {DonutChartComponent} from "@/app/ui/charts/DonutChartComponent";
import {generateLabelAndColors} from "@/app/pages/finance/personal/mortgage-calculator/ChartOptions";

export function MortgageBreakdownComponent(mortgage: Mortgage){
    const monthlyPayment = calculateMonthlyBreakdown(mortgage)
    const {colors, labels} = generateLabelAndColors()
    const chartData:IChartData = {
        datasets: [{
            label: '$ ' + numberToTwoDecimalPlaces(monthlyPayment.total) + ' /mth',
            data: [monthlyPayment.principalInterest, monthlyPayment.pmi, monthlyPayment.propertyTax, monthlyPayment.hoaFees, monthlyPayment.homeOwnerInsurance],
            backgroundColor: colors,
            hoverOffset: 4
        }],
        labels: labels

    }
    return(
        <Container>
            <Tabs id={'mortgageBreakdownComponent'}>
                <Tab eventKey="breakdown" title="Payment breakdown">
                    <BreakdownChart labels={chartData.labels} datasets={chartData.datasets}/>
                </Tab>
                <Tab eventKey="amortization" title="Amortization Schedule">
                    Tab content for Profile
                </Tab>
            </Tabs>
        </Container>)
}

function BreakdownChart(data: IChartData){
    return (
        <Container>
            <Row>
                <Col>
                    <DonutChartComponent labels={data.labels} datasets={data.datasets}/>
                </Col>
                <Col>

                </Col>
            </Row>
        </Container>
    )
}