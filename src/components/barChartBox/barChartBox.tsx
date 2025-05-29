import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts"
import "./barChartBox.scss"
import '../../styles/variabels.scss'
type props = {
    title: string,
    color: string,
    dataKey: string,
    chartData: object[],
}
export default function BarChartBox(props: props) {
    return (
        <article className="barChartBox">
            <h1> {props.title}</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={150}>
                    <BarChart data={props.chartData} >
                        <Tooltip  contentStyle={{ background: "#081028", border: "none" }}
                                    labelStyle={{ display: "none" }} cursor={{fill:'none'}} />
                        <Bar dataKey={props.dataKey} fill={props.color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </article>
    )
}
