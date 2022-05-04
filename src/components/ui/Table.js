import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import AddModal from './AddModal';
import { destroyCard } from '../../store/slice';
import EditModal from './EditModal';

const BasicTable = () => {
  const sample = useSelector(state=>state.cards.cards)
  const [modal,setModal]=useState(false)
  const dispatch = useDispatch();
  const [card,setCard] = useState({});
  const editHandler=(id)=>{
    setModal(true)
    const simpleCard = sample.filter(ca=>ca.id == id);
    setCard(simpleCard)
  }
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Id</TableCell>
            <TableCell >Title</TableCell>
            <TableCell >State</TableCell>
            <TableCell >Url</TableCell>
            <TableCell >Created at</TableCell>
            <TableCell >Updated at</TableCell>
            <TableCell onClick={()=>{setModal(true)}}><AddIcon/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sample.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right">{row.url}</TableCell>
              <TableCell align="right">{row.created_at}</TableCell>
              <TableCell align="right">{row.updated_at}</TableCell>
              <TableCell align="right"><EditIcon onClick={()=>{editHandler(row.id)}}/><DeleteIcon  onClick={()=>{dispatch(destroyCard(row.id))}}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <AddModal modal={modal} closeModal={()=>{setModal(false)}} />
    <EditModal modal={modal} closeModal={()=>{setModal(false)}} value={card}/>
    </>
  )
}

export default BasicTable