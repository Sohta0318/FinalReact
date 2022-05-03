import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

const BasicTable = () => {
  const sample = useSelector(state=>state.cards.cards)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell >Title</TableCell>
            <TableCell >State</TableCell>
            <TableCell >Url</TableCell>
            <TableCell >Created at</TableCell>
            <TableCell >Updated at</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BasicTable