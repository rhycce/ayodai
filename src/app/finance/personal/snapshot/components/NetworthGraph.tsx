import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

export default function NetworthGraph({
  assetTotal,
  liabilityTotal,
  netWorth,
}: {
  assetTotal: number
  liabilityTotal: number
  netWorth: number
}) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Net Worth Chart',
      },
    },
  }
  const labels: string[] = ['Current']
  const data = {
    labels,
    datasets: [
      {
        label: 'Assets',
        data: [assetTotal],
        backgroundColor: 'green',
      },
      {
        label: 'Liabilities',
        data: [liabilityTotal * -1],
        backgroundColor: 'red',
      },

      {
        label: 'Net Worth',
        data: [netWorth],
        backgroundColor: netWorth >= 0 ? 'green' : 'red',
      },
    ],
  }
  return (
    <div className={'border-t'}>
      <Bar
        data={data}
        options={options}
        style={{ height: '40vh', width: '80vw' }}
      />
    </div>
  )
}
