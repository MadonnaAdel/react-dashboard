import { Link } from "react-router-dom"
import Details from "../../components/details/Details"


export const myProfile = {
    _id: "1",
    id: 1,
    title: "Madonna",
    img: "/madonna.jpg",
    info: {
        userId: "Ps5SDF1156d",
        LinkedIn: <Link to="https://www.linkedin.com/in/madonna-adel-" style={{textDecoration:"under-line"}}>click here</Link>,
        Title: "Frontend Developer",
    },
    chart: {
        dataKeys: [
            { name: "visits", color: "#82ca9d" },
            { name: "orders", color: "#6254ff" },
        ],
        data: [
            {
                name: "Sun",
                visits: 4000,
                orders: 2400,
            },
            {
                name: "Mon",
                visits: 3000,
                orders: 1398,
            },
            {
                name: "Tue",
                visits: 2000,
                orders: 3800,
            },
            {
                name: "Wed",
                visits: 2780,
                orders: 3908,
            },
            {
                name: "Thu",
                visits: 1890,
                orders: 4800,
            },
            {
                name: "Fri",
                visits: 2390,
                orders: 3800,
            },
            {
                name: "Sat",
                visits: 3490,
                orders: 4300,
            },
        ],
    },
    activities: [
        {
            text: "Madona completed a responsive admin dashboard using React and Material UI",
            time: "3 days ago",
        },
        {
            text: "Madona built a multi-language e-commerce frontend using Next.js and i18next",
            time: "1 week ago",
        },
        {
            text: "Madona collaborated with a backend team in a Digital Egypt Initiative project",
            time: "2 weeks ago",
        },
        {
            text: "Madona finished the ITI Frontend Web Development program with distinction",
            time: "1 month ago",
        },
        {
            text: "Madona delivered a freelance landing page project through Mostaql platform",
            time: "1 month ago",
        },
        {
            text: "Madona integrated API services in a freelance admin panel project on Khamsat",
            time: "2 months ago",
        },
    ]

};
export default function Profile() {
    return (
        <div>

            <Details {...myProfile} />

        </div>
    )
}

