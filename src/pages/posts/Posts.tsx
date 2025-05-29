import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/Add/Add"
import Table from "../../components/table/Table"
import "./posts.scss"
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";
const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 50 },
    { field: 'title', headerName: 'Title', width: 100 },
    {
        field: "content", headerName: "content", width: 280,
    },
    { field: 'author', headerName: 'Author', width: 180, type: 'string' },
    { field: 'createdAt', headerName: 'Created At', width: 120, type: 'string' },


];
export default function Posts() {
    const [isOpen, setIsOpen] = useState(false);


    const { isPending, data } = useQuery({
        queryKey: ['allposts'],
        queryFn: () =>
            fetch('https://reactadmin-ovax7poq6-madonnaadels-projects.vercel.app/api/posts').then((res) =>
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
            <section className='postsSec '>
                <div className="headPage">
                    <h1>Posts</h1>
                    <button className="addPost" onClick={() => setIsOpen(!isOpen)}> post+</button>
                </div>
                <Table rows={data} columns={columns} slug="posts" />
                {isOpen && <Add columns={columns} slug='posts' setOpen={setIsOpen} />}
            </section>
        )

    )
}
