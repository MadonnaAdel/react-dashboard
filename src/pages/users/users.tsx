import Table from '../../components/table/Table';
import { GridColDef } from '@mui/x-data-grid';
import './users.scss'
import { useState } from 'react';
import Add from '../../components/Add/Add';
import { useQuery } from '@tanstack/react-query';
import { CircularProgress } from '@mui/material';
const columns: GridColDef[] = [
  { field: '_id', headerName: 'ID', width: 50 },
  {
    field: "avatar", headerName: "Avatar", width: 70,
    renderCell: (params) => (
      <img
        src={params.row.img || "/noavatar.png "}

        alt="avatar"
        style={{ width: 32, height: 32, borderRadius: '50%', objectFit: "cover", marginTop: "9px" }}
      />
    ),
  },
  { field: 'firstName', headerName: 'First name', width: 100, type: 'string' },
  { field: 'lastName', headerName: 'Last name', width: 100, type: 'string' },
  { field: 'email', headerName: 'Email', width: 160, type: 'string' },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 160,
    type: 'string'
  },
  {
    field: 'createdAt',
    headerName: 'Created at',
    width: 130,

  },
  {
    field: 'verified',
    headerName: 'verified',
    type: 'boolean',
    width: 70,

  },
];

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);


  const { isPending, data } = useQuery({
    queryKey: ['allusers'],
    queryFn: () =>
      fetch('https://reactadmin-ovax7poq6-madonnaadels-projects.vercel.app/api/users').then((res) =>
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
      <section className='usersSec'>
        <div className="headPage">
          <h1>Users</h1>
          <button className="addUser" onClick={() => setIsOpen(!isOpen)}> User+</button>
        </div>
        <Table rows={data} columns={columns} slug="users" />
        {isOpen && <Add columns={columns} slug='users' setOpen={setIsOpen} />}
      </section>
    )
  );
};

export default Users;
