import { CartesianGrid, Legend, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Line } from 'recharts'
import './details.scss';

interface DetailsProps {
    _id: string;
    img?: string;
    title: string;
    info?: object;
    chart?: {
        dataKeys: { name: string, color: string }[];
        data: object[];
    }
    activities?: { text: string, time: string }[]

}


export default function Details(props: DetailsProps) {

    const opacity: { pv: number; uv: number } = { pv: 1, uv: 1 };
    return (
        <section className="details container">

            <div className="view">
                <div className="info">
                    <div className="headInfo">
                        {
                            props?.img &&
                            <img src={props?.img} onError={(e) => { (e.target as HTMLImageElement).src = '/noavatar.png'; }} alt={props.title} />

                        }
                        <p className="title">{props.title}</p>
                        <button>update</button>
                    </div>
                    <div className="bodyInfo">
                        {
                            Object.entries(props.info ?? {}).map((item) => (
                                <div className="item" key={item[0]}>
                                    <p className='title'>{item[0]}</p>
                                    :
                                    <p className='value'>{item[1] === true ? "yes" : item[1]}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <hr className='spretor' />
                {props.chart &&
                    <div className="chart">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart
                                width={500}
                                height={300}
                                data={props.chart.data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                {props.chart.dataKeys.map((key, idx) => (
                                    <Line
                                        key={idx}
                                        type="monotone"
                                        dataKey={key.name}
                                        stroke={key.color}
                                        strokeOpacity={opacity[key.name as keyof typeof opacity] ?? 1}
                                    />
                                ))}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                }

            </div>
            <div className="activites">
                <h1>Latest activities</h1>
                <ul>
                    {props?.activities?.map((act, i) => {
                        return (
                            <li key={i}>
                                <div className="activities">
                                    <p className="title">
                                        {act.text}
                                    </p>
                                    <span className="time">
                                        {act.time}
                                    </span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}
