import { useState } from 'react'
import Table from '../../components/table/Table';
import Add from '../../components/Add/Add';
import { GridColDef } from '@mui/x-data-grid';
import './products.scss'
import { useQuery } from '@tanstack/react-query';
import { CircularProgress } from '@mui/material';
const columns: GridColDef[] = [
  { field: '_id', headerName: 'ID', width: 50 },
  {
    field: "avatar", headerName: "Avatar", width: 90,
    renderCell: (params) => (
      <img
        src={params.row.img || "/noavatar.png "}
        onError={(e) => { (e.target as HTMLImageElement).src = "/noavatar.png"; }}
        alt="avatar"
        style={{ width: 32, height: 32, borderRadius: '50%', objectFit: "cover", marginTop: "9px" }}
      />
    ),
  },
  { field: 'title', headerName: 'Title', width: 170, type: 'string' },
  { field: 'color', headerName: 'Color', width: 90, type: 'string' },
  { field: 'price', headerName: 'Price', width: 100, type: 'number' },
  {
    field: 'producer',
    headerName: 'Producer',
    width: 150,
    type: 'string'
  },
  {
    field: 'createdAt',
    headerName: 'Created at',
    width: 130,

  },
  {
    field: 'inStock',
    headerName: 'In Stock',
    type: 'boolean',
    width: 70,

  },
];

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isPending, data } = useQuery({
    queryKey: ['allproducts'],
    queryFn: () =>
      fetch('https://reactadmin-ovax7poq6-madonnaadels-projects.vercel.app/api/products').then((res) =>
        res.json(),
      ),
  })
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
      <section className='productsSec '>
        <div className="headPage">
          <h1>Products</h1>
          <button className="addProduct" onClick={() => setIsOpen(!isOpen)}> product+</button>
        </div>
        <Table rows={data} columns={columns} slug="products" />
        {isOpen && <Add columns={columns} slug='products' setOpen={setIsOpen} />}
      </section>
    )

  );
}

export default Products 