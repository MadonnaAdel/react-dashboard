import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, } from "recharts"
import "./PieCharts.scss"
const data = [
    { name: 'Laptob', value: 400 },
    { name: 'Mobile', value: 300 },
    { name: 'Desktop', value: 300 },
    { name: 'Tablet', value: 200 },
];


const RADIAN = Math.PI / 180;
interface CustomizedLabelProps {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
}

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
}: CustomizedLabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
export default function PieCharts() {
    const COLORS = ['#6254ff', '#ffb331', '#968dff', '#ffa200'];
    return (
        <article className="pieChart">
            <h1> Lead by Source</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={200}>
                    <PieChart width={400} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: " #ddddddb0", border: "none", color: "white" }} />
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="chartInfo">
                {
                    data.map((item, index) => {
                        return (
                            <div className="info" key={index}>
                                <div className="title">
                                    <div className="dot" style={{ backgroundColor: COLORS[index] }} />
                                    <span> {item.name}</span>
                                </div>
                                <span>{item.value}</span>
                            </div>
                        )
                    })
                }
            </div>
        </article>
    )
}
