import { useParams } from 'react-router-dom'
import Details from '../../../components/details/Details'
import { singleProduct } from '../../../Data'
import './product.scss'
import { useQuery } from '@tanstack/react-query'
import { CircularProgress } from '@mui/material'

export default function Product() {
  const { id } = useParams()
  const { isPending, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(`https://reactadmin-ovax7poq6-madonnaadels-projects.vercel.app/api/products/${id}`).then((res) =>
        res.json(),
      ),
  })

  const product = {
    _id: data?._id,
    title: data?.title,
    img: data?.img,
    info: {
      color: data?.color,
      price: data?.price,
      producer: data?.producer,
      inStock: data?.inStock,

    },
    chart: singleProduct.chart,
    activities: singleProduct.activities
  }
  return (
    isPending ? (
      <div style={{ position: 'relative', height: '100%', width: '100%' }}>
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
    ) : (
      <Details {...product} />
    )
  )
}
