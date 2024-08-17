import Container from "react-bootstrap/Container";
import {ArcElement, Chart, Legend, Tooltip, DoughnutController} from "chart.js";
import {IChartData} from "@/app/ui/charts/ChartData";
import {Doughnut} from "react-chartjs-2";
const canvasId = 'chartContainer'
export function DonutChartComponent(data: IChartData){
    Chart.register(Tooltip, Legend, ArcElement);
    return (
        <Container>
            <Doughnut data={data} />
        </Container>
    )
}