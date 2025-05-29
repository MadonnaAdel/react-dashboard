
import { Link } from 'react-router-dom'
import './chartBox.scss'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'
type chartProps = {
    color: string,
    icon: string,
    title: string,
    number: string,
    dataKey: string,
    percentage: number,
    chartData: object[]
}
export default function ChartBox(props: chartProps) {

    return (
        <article className='chartBox'>
            <div className="chartContainer">
                <div className="boxInfo">
                    <div className="title">
                        <img src={props.icon} alt={props.title} className='chartIcon' />
                        <span> {props.title}</span>
                    </div>
                    <h1>{props.number}</h1>
                    <Link to={"/"} className='viewLink'>View All</Link>
                </div>
                <div className="chartInfo">
                    <div className="chart">
                        <ResponsiveContainer width="99%" height="100%">
                            <LineChart data={props.chartData}>
                                <Tooltip
                                    contentStyle={{ background: "transparent", border: "none" }}
                                    labelStyle={{ display: "none" }}
                                />
                                <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="text">
                        <span className="percentage" style={{ color: props.percentage < 0 ? "tomato" : "green" }}>{props.percentage}%</span>
                        <span className="duration">This Month</span>
                    </div>
                </div>
            </div>
        </article>
    )
}
