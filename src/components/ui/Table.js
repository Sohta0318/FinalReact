import React, { useRef, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector,useDispatch, shallowEqual } from "react-redux";
import AddModal from "./AddModal";
import TextField from "@mui/material/TextField";
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import EditModal from './EditModal';
import DestroyModal from './DestroyModal';
import { createdAtSort, filterCards, idSort, titleSort, updatedAtSort, urlSort } from '../../store/slice';
import FormControl from '@mui/material/FormControl';


const BasicTable = () => {
  const filterRef = useRef()
  const dispatch = useDispatch()
  const sample = useSelector(state=>state.cards.cards, shallowEqual)
  const [addModal,setAddModal]=useState(false)
  const [editModal,setEditModal]=useState(false)
  const [destroyModal,setDestroyModal]=useState(false)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [card,setCard] = useState({});
  const editHandler=(id)=>{
    setEditModal(true)
    const simpleCard = sample.filter(ca=>ca.id == id);
    setCard(simpleCard)
  }
  const destroyHandler = (id)=>{
    setDestroyModal(true)
    const simpleCard = sample.filter(ca=>ca.id == id);
    setCard(simpleCard)
  }
  const filterHandler = ()=>{
    dispatch(filterCards(filterRef.current.value))
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  return (
    <>
    <FormControl fullWidth sx={{ m: 1 }}>
    <TextField id="standard-basic" label="Filter issues" variant="standard" style={{height:'100px'}} inputRef={filterRef} onChange={filterHandler}/>
    </FormControl>
    
          
        

  
      <TableContainer role="grid" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{tableLayout: 'fixed'}}>
          <TableHead>
            <TableRow>
              <TableCell onClick={()=>{dispatch(idSort())}} style={{ padding: 0, cursor:'pointer'}}>Id</TableCell>
              <TableCell onClick={()=>{dispatch(titleSort())}} style={{ padding: 0, cursor:'pointer'}}>Title</TableCell>
              <TableCell style={{ padding: 0, cursor:'pointer'}}>State</TableCell>
              <TableCell onClick={()=>{dispatch(urlSort())}} style={{ padding: 0,cursor:'pointer' }}>Url</TableCell>
              <TableCell onClick={()=>{dispatch(createdAtSort())}} style={{ padding: "0 0 0 20px" }}>
                Created at
              </TableCell>
              <TableCell onClick={()=>{dispatch(updatedAtSort())}} style={{ padding: 0 }}>Updated at</TableCell>
              <TableCell onClick={() => {setAddModal(true);}}>
                <AddIcon
                  style={{
                    backgroundColor: "#e9eaf7",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    cursor: 'pointer'
                  }}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sample.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell
                  align="left"
                  style={{ height: "5px", padding: "0px", width: "25vw" }}
                >
                  {row.title}
                </TableCell>
                <TableCell
                  align="left"
                  style={{ height: "5px", padding: "0px" }}
                >
                  {row.state}
                </TableCell>
                <TableCell
                  align="left"
                  style={{
                    height: "5px",
                    padding: "0px",
                    wordWrap: "breakAll",
                    overflow:'hidden',
                    textOverflow:'ellipsis',
                    width:'30px'
                  }}
                >
                  {row.url}
                </TableCell>
                <TableCell
                  align="left"
                  style={{ height: "5px", padding: "0px 0px 0px 20px"}}
                >
                  {row.created_at}
                </TableCell>
                <TableCell
                  align="left"
                  style={{ height: "5px", padding: "0px" }}
                >
                  {row.updated_at}
                </TableCell>
                <TableCell
                  align="left"
                  style={{ height: "5px", padding: "0px" }}
                >
                  <EditIcon color="error" onClick={()=>{editHandler(row.id)}} style={{ paddingRight: "10px", cursor:'pointer'}} />
                  <DeleteIcon color="error" onClick={()=>{destroyHandler(row.id)}} style={{ marginRight: "30px", cursor:'pointer'}} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 100,]}
              colSpan={3}
              count={sample.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'Items per page:',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
      </TableContainer>
     <AddModal modal={addModal} closeModal={()=>{setAddModal(false)}} />
    <EditModal modal={editModal} closeModal={()=>{setEditModal(false)}} value={card}/>
    <DestroyModal modal={destroyModal} closeModal={()=>{setDestroyModal(false)}} value={card}/>
    </>
    )
            }
      
  


  
  


export default BasicTable;
