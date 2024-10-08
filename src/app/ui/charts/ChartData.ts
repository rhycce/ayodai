export interface IChartData{
    labels:string[],
    datasets: IDatasets[]
}

export interface IDatasets{
    label: string,
    data: number[],
    backgroundColor: string[],
    hoverOffset: number
}