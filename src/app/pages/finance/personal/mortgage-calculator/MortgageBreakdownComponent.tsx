import {
    calculateMonthlyBreakdown,
    Mortgage,
    numberToTwoDecimalPlaces
} from "@/app/pages/finance/personal/mortgage-calculator/MortgageCalculator";
import Container from "react-bootstrap/Container";
import {Col, InputGroup, ListGroup, ListGroupItem, Row, Tab, Tabs} from "react-bootstrap";
import {IChartData} from "@/app/ui/charts/ChartData";
import {DonutChartComponent} from "@/app/ui/charts/DonutChartComponent";
import {generateLabelAndColors} from "@/app/pages/finance/personal/mortgage-calculator/ChartOptions";
import InputGroupText from "react-bootstrap/InputGroupText";

export function MortgageBreakdownComponent(mortgage: Mortgage){
    const monthlyPayment = calculateMonthlyBreakdown(mortgage)
    const {colors, labels, values} = generateLabelAndColors(monthlyPayment)
    const chartData:IChartData = {
        datasets: [{
            label: '$ ' + numberToTwoDecimalPlaces(monthlyPayment.total) + ' /mth',
            data: values,
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
                    <ListGroup variant={'flush'}>
                        {
                            data.datasets[0].data.map((dataset, i) =>{
                                return (
                                    <ListGroupItem className={'mt-2'} size='lg' key={'list_group_item_' + i}>
                                        <InputGroup>
                                            <InputGroupText>
                                                {data.labels[i]}
                                            </InputGroupText>
                                            <InputGroupText className={'place-content-end'}>
                                                   $ {dataset}
                                            </InputGroupText>
                                        </InputGroup>
                                    </ListGroupItem>
                                )
                                }

                            )
                        }

                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}