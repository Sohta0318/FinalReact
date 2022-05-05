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
import {useSelector } from 'react-redux';
import AddModal from './AddModal';

import EditModal from './EditModal';
import DestroyModal from './DestroyModal';

const BasicTable = () => {
  const sample = useSelector(state=>state.cards.cards)
  const [addModal,setAddModal]=useState(false)
  const [editModal,setEditModal]=useState(false)
  const [destroyModal,setDestroyModal]=useState(false)

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
            <TableCell onClick={()=>{setAddModal(true)}}><AddIcon/></TableCell>
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
              <TableCell align="right"><EditIcon onClick={()=>{editHandler(row.id)}}/><DeleteIcon  onClick={()=>{destroyHandler(row.id)}}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <AddModal modal={addModal} closeModal={()=>{setAddModal(false)}} />
    <EditModal modal={editModal} closeModal={()=>{setEditModal(false)}} value={card}/>
    <DestroyModal modal={destroyModal} closeModal={()=>{setDestroyModal(false)}} value={card}/>
    </>
  )
}

export default BasicTable