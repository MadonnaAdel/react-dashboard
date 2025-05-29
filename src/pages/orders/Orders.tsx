import { GridColDef } from '@mui/x-data-grid';
import Add from '../../components/Add/Add'
import Table from '../../components/table/Table'
import './orders.scss'
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 50 },
    { field: 'productId', headerName: 'Product Id', width: 50 },
    {
        field: "productTitle", headerName: "Product Title", width: 150,
    },
    { field: 'customerName', headerName: 'Customer Name', width: 170, type: 'string' },
    { field: 'quantity', headerName: 'Quantity', width: 90, type: 'string' },
    { field: 'totalPrice', headerName: 'Total Price', width: 100, type: 'number' },
    {
        field: 'status',
        headerName: 'Status',
        width: 150,
        type: 'string'
    },
];
export default function Orders() {
    const [isOpen, setIsOpen] = useState(false)
    const { isPending, data } = useQuery({
        queryKey: ['allorders'],
        queryFn: () =>
            fetch('https://reactadmin-ovax7poq6-madonnaadels-projects.vercel.app/api/orders').then((res) =>
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
            <section className='ordersSec '>
                <div className="headPage">
                    <h1>Orders</h1>
                    <button className="addOrder" onClick={() => setIsOpen(!isOpen)}> order+</button>
                </div>
                <Table rows={data} columns={columns} slug="orders" />
                {isOpen && <Add columns={columns} slug='orders' setOpen={setIsOpen} />}
            </section>
        )
    )
}
