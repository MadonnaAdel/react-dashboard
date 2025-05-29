import { GridColDef } from '@mui/x-data-grid'
import './Add.scss'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

interface AddPopupProps {
    columns: GridColDef[];
    slug: string;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> { }


export default function Add(props: AddPopupProps) {
    const queryClient = useQueryClient();
    const mutation = useMutation<{ [key: string]: string }, unknown, { [key: string]: string }>({
        mutationFn: (body) =>
            fetch(`https://reactadmin-ovax7poq6-madonnaadels-projects.vercel.app/api/${props.slug}`,
                {
                    method: "POST",
                    headers: {
                        Accept: 'application/json',
                        "content-type": 'application/json'
                    },
                    body: JSON.stringify(body)
                }
                ,
            ).then((res) =>
                res.json(),
            ),
        onSuccess: (res) => {
            queryClient.invalidateQueries({ queryKey: [`all${props.slug}`] })
            props.setOpen(false);
            if (res) {
                toast.success(`${props.slug} added successfully`);

            } else {
                toast.error("Something went wrong");
            }
        },
        onError: (error) => {
            console.error(error);
            const errorMessage = (error && typeof error === 'object' && 'message' in error)
                ? (error as { message: string }).message
                : "Failed to add user";
            toast.error(errorMessage);
        }
    })
    const handleSubmit = (e: HandleSubmitEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: { [key: string]: string } = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value.toString();
        }
        mutation.mutate(data);
    }
    return (
        <div className="addPopup">
            <div className="modal">
                <div className="closeBtn" onClick={() => props.setOpen(false)}>
                    X
                </div>
                <div className="popUpBody">
                    <h1 className="title">
                        Add New User
                    </h1>
                    <form onSubmit={handleSubmit}>
                        {
                            props.columns.filter((col) => col.field !== '_id' && col.field !== "avatar").map((col, i) => {
                                return (
                                    <div className="item" key={i}>
                                        <label htmlFor={col.field}>{col.headerName} </label>
                                        <input
                                            type={col?.type || "text"}
                                            placeholder={`Enter ${col.headerName}`}
                                            name={col.field}
                                        />
                                    </div>
                                );
                            })
                        }
                        <button type='submit'>Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
