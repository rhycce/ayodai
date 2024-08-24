import Container from "react-bootstrap/Container";
import {ArcElement, Chart, Legend, Tooltip,  ChartMeta} from "chart.js";
import {IChartData} from "@/app/ui/charts/ChartData";
import {Doughnut} from "react-chartjs-2";
import {TType} from "ts-interface-checker";
export function DonutChartComponent(data: IChartData){
    Chart.register(Tooltip, Legend, ArcElement);
    const textCenter = {
        id: 'textCEnter',
        beforeDatasetDraw(chart: Chart<TType>, args: { index: number; meta: ChartMeta }): boolean | void {
            const ctx = chart.ctx;
            const meta = args.meta;
            const xCoor = meta.data[0].x;
            const yCoor = meta.data[0].y;
            const sum = data.datasets[0].data.reduce((sum, current) => sum + current, 0)
            ctx.save();
            ctx.textAlign = 'center';
            ctx.font = '32px sans-serif';
            ctx.fillText( `$ ${sum}`, xCoor, yCoor);
            ctx.restore();
        }
    }
    const options= {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 65,
        plugins: {
            legend: {
                display: false
            }
        }
    }
    return (
        <Container>
            <Doughnut data={data} plugins={[textCenter]} options={options}/>
        </Container>
    )
}