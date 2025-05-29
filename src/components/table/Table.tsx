import { DataGrid, GridColDef } from '@mui/x-data-grid';
import './table.scss'
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            paper: '#0b1739',
            default: '#0b1739',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
        },

    },
});

interface TableProps {
    rows: object[];
    columns: GridColDef[];
    slug: string
}

export default function Table(props: TableProps) {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (id: number) =>
            fetch(`https://reactadmin-ovax7poq6-madonnaadels-projects.vercel.app/api/${props.slug}/${id}`,
                { method: "delete" }
            ).then((res) =>
                res.json(),
            ),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [`all${props.slug}`] })
            toast.success(`${props.slug} deleted successfully`);
        }
    })
    const handelDelete = (id: number) => {
        mutation.mutate(id)
    }
    const actionColumns: GridColDef = {
        field: 'actions',
        headerName: 'Actions',
        width: 95,
        renderCell: (params) => {
            return (
                <div className="action-buttons">
                    <Link to={`/${props.slug}/${params.row._id}`} className="icon-button view">
                        <img src="/view.svg" alt="view user" />
                    </Link>
                    <div className="icon-button delete" onClick={() => handelDelete(params.row._id)}>
                        <img src="/delete.svg" alt="delete" />
                    </div>
                </div>
            );
        }
    }

    return (
        <section className=" table">
            <ThemeProvider theme={darkTheme}>

                <DataGrid
                    className='dataGrid'
                    rows={props.rows}
                    columns={[...props.columns, actionColumns]}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        }
                    }}
                    getRowId={(row) => row._id}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                        },
                    }}
                    showToolbar
                    disableColumnFilter
                    disableDensitySelector
                    disableColumnSelector
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{
                        borderRadius: "10px", height: "70vh",
                        width: "100%",
                        overflowX: "auto",
                    }}
                />
            </ThemeProvider>
        </section>
    )
}

