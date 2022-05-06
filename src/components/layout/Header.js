import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import ReplayIcon from '@mui/icons-material/Replay';
import { Box } from '@mui/system';


const Home = () => {
  return (
    <AppBar>
      <Box sx={{ display: 'flex' }}>
      <Toolbar style={{backgroundColor:'#4050b5', fontSize:'18px', fontWeight:900,width:'75%'}}>Angular 9 MatTable CRUD Example</Toolbar>
    <Toolbar style={{backgroundColor:'#4050b5', fontSize:'18px', fontWeight:900, width:'25%'}}>Reload data <ReplayIcon sx={{
    ':hover': {
      cursor: 'pointer', 
    },
  }}/></Toolbar>
    </Box>
    </AppBar>
  )
}

export default Home