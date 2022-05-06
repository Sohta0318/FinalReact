import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch } from 'react-redux';
import { destroyCard } from '../../store/slice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const DestroyModal = ({modal,closeModal, value})=> {
const dispatch = useDispatch()
const destroyHandler= ()=>{
  dispatch(destroyCard(value[0]?.id))
  closeModal()
}
  return (
    <div>
      <Modal
        open={modal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Id: {value[0]?.id}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Title: {value[0]?.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            State: {value[0]?.state}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Url: {value[0]?.url}
          </Typography>

          <div style={{marginTop:40}}>
            <Button  onClick={destroyHandler} style={{marginRight: 10, color:'black'}}>Delete</Button>
            <Button onClick={closeModal} style={{color:'black'}}>Cancel</Button>
            </div>

        </Box>
      </Modal>
    </div>
  );
}

export default DestroyModal