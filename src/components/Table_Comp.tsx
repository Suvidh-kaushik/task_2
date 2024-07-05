import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


interface user{
 userId:number,
 id:number,
 title:string,
 body:string
}



const columns:GridColDef<user>[]=[
  { field: 'id', headerName: 'ID', width: 80 },
  {
    field: 'userId',
    headerName: 'USERID',
    width: 80,
    editable: true,
  },
  {
    field: 'title',
    headerName: 'TITLE',
    width: 150,
    editable: true,
  },
  {
    field: 'body',
    headerName: 'BODY',
    type: 'number',
    width: 400,
    editable: true,
  }
]

const Table_Comp = () => {



const [rows,setrows]=useState<user[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setrows(result); 
      } catch (error) {
          console.log(error);
          toast.error("error in fetching")
      }
    };

    fetchData();
  }, []);


  return (
    <Box display="flex" justifyContent="center" alignItems="center" marginTop="10px">
     <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 9,
            },
          },
        }}
        pageSizeOptions={[4, 9]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{ border: '1px solid black' }}
      />
    </Box>
  )
}

export default Table_Comp
