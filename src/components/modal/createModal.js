import React,{useState,useRef} from 'react'
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import { useDispatch } from 'react-redux';
import { createCard } from '../../store/cardSlice';

const AddModal = ({modal,closeModal}) => {
  const idInput = useRef();
  const titleInput = useRef();
  const stateInput = useRef();
  const urlInput = useRef();
  const created_atInput = useRef();
  const updated_atInput = useRef();
  const dispatch = useDispatch()
  const style = {
    box:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    height: 500,
    overflow: 'auto',
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,},
    title:{
      textAlign:'center'
    },
    button:{
      '&:hover': {
        backgroundColor: '#fff',
        color: '#3c52b2',
    },
    }
  };
      const [isValid,setIsValid] = useState(false)
      const addChangeHandler = ()=>{
        setIsValid(false)
        if(!idInput.current.value == '' && !titleInput.current.value == '' &&!stateInput.current.value == ''  ){
          setIsValid(true)
        }
      }
      
          const saveHandler = ()=>{
            const test={
              id:idInput.current.value,
              title:titleInput.current.value,
              state:stateInput.current.value,
              url:urlInput.current.value,
              created_at:Date.now(),
              updated_at:Date.now(),
                }
            dispatch(createCard(test))
            closeModal()
          }
  return (
    <Modal
        open={modal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.box}>
        <Typography  id="modal-modal-title" variant="h6" component="h2" style={style.title}>
            Add new Issue
          </Typography>
          <FormLabel onChange={addChangeHandler} >

          <FormControl fullWidth sx={{ m: 1 }} style={{margin: 'auto'}}>
          <TextField margin="normal" id="standard-basic" label="Id" variant="standard"    inputRef={idInput} />
          </FormControl>

          <FormControl fullWidth sx={{ m: 1 }} style={{margin: 'auto'}}>
          <TextField margin="normal" id="standard-basic" label="Title" variant="standard"  inputRef={titleInput}/>
          </FormControl>

          <FormControl fullWidth sx={{ m: 1 }} style={{margin: 'auto'}}>
          <TextField margin="normal" id="standard-basic" label="State" variant="standard"  inputRef={stateInput}/>
          </FormControl>

          <FormControl fullWidth sx={{ m: 1 }} style={{margin: 'auto'}}>
          <TextField margin="normal" id="standard-basic" label="Url" variant="standard"  inputRef={urlInput} />
          </FormControl>

          <FormControl fullWidth sx={{ m: 1 }} style={{margin: 'auto'}}>
          <TextField margin="normal" id="standard-basic" label="Created at" variant="standard"  inputRef={created_atInput}/>
          </FormControl>

          <FormControl fullWidth sx={{ m: 1 }} style={{margin: 'auto'}}>
          <TextField margin="normal" id="standard-basic" label="Updated at" variant="standard"  inputRef={updated_atInput}/>
          </FormControl>
          

          <div style={{marginTop:40}}>
            <Button disabled={!isValid} onClick={saveHandler} style={{color: !isValid ? '' :'black', marginRight: 10}}>Save</Button>
            <Button onClick={closeModal} style={{color:'black'}}>Cancel</Button>
            </div>
          </FormLabel>
        </Box>
      </Modal>
  )
}

export default AddModal
