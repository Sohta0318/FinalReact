import React,{useState,useRef} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button'
import FormLabel from '@mui/material/FormLabel';
import { useDispatch } from 'react-redux';
import { createCard } from '../../store/slice';

const EditModal = ({modal,closeModal,value}) => {
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
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,},
    title:{
      textAlign:'center'
    },
    input:{
      margin: 'auto'
    }
  };
      const [isValid,setIsValid] = useState(false)
      const addChangeHandler = ()=>{
        setIsValid(false)
        if(!idInput.current.value == '' &&!titleInput.current.value == '' &&!stateInput.current.value == ''  ){
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
            Edit Modal
          </Typography>
          <FormLabel onChange={addChangeHandler}>
          
          <TextField id="standard-basic" label="Id" variant="standard" style={style.input} value={value[0]?.id}   inputRef={idInput} error={!isValid} inputProps={{ maxLength: 4, pattern: "^[a-zA-Z0-9_]+$" }}/>

          
          <TextField id="standard-basic" label="Title" variant="standard" value={value[0]?.title} inputRef={titleInput}/>

          
          <TextField id="standard-basic" label="State" variant="standard" value={ value[0]?.state} inputRef={stateInput}/>

          
          <TextField id="standard-basic" label="Url" variant="standard" value={ value[0]?.url} inputRef={urlInput}/>

          
          <TextField id="standard-basic" label="Created at" variant="standard" value={ value[0]?.created_at} inputRef={created_atInput}/>

          
          <TextField id="standard-basic" label="Updated at" variant="standard" value={ value[0]?.updated_at} inputRef={updated_atInput}/>

          <ButtonGroup disableElevation variant="contained">
            <Button disabled={!isValid} onClick={saveHandler}>Save</Button>
            <Button onClick={closeModal}>Cancel</Button>
          </ButtonGroup>
          </FormLabel>
        </Box>
      </Modal>
  )
}

export default EditModal