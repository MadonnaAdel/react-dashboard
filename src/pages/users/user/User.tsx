import Details from "../../../components/details/Details"
import "./user.scss"
import { useParams } from "react-router-dom"
import { singleUser } from "../../../Data"
import { CircularProgress } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
export default function User() {
  const { id } = useParams()
  const { isPending, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(`https://reactadmin-ovax7poq6-madonnaadels-projects.vercel.app/api/users/${id}`).then((res) =>
        res.json(),
      ),
  })
  const user = {
    _id: data?._id,
    title: data?.firstName,
    img: data?.img,
    info: {
      username: data?.firstName,
      fullname: data?.firstName + data?.lastName,
      email: data?.email,
      phone: data?.phone,

    },
    chart: singleUser.chart,
    activities: singleUser.activities
  }
  return (
    <div>
      {isPending ? <div style={{ position: 'relative', height: '100%', width: '100%' }}>
        <CircularProgress
          size={40}
          sx={{
            color: '#6254ff',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
        :
        <Details {...user} />
      }

    </div>
  )
}
