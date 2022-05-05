import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { border, fontWeight, height, padding, width } from "@mui/system";

const AddModal = ({ modal, closeModal }) => {
  const style = {
    box: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 450,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    },
    title: {
      textAlign: "left",
      marginBottom: "20px",
    },
    input: {
      margin: "auto",
      padding: "7px 0px",
      width: "100%",
      height: "5px",
      paddingBottom: "40px",
    },
  };
  const test = {
    id: 1,
    title: "test",
    state: "open",
    url: "ushb",
    created_at: Date.now(),
    updated_at: Date.now(),
  };
  const [validation, setValidation] = useState(false);
  const changeHandler = () => {
    setValidation(false);
    if (true) {
      setValidation(true);
    }
  };
  return (
    <Modal
      open={modal}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style.box}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          style={style.title}
        >
          Add new Issue
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 3 }}>
          <TextField
            id="standard-basic"
            label="Id"
            variant="standard"
            style={style.input}
          />
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            style={style.input}
          />
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <TextField
            id="standard-basic"
            label="State"
            variant="standard"
            style={style.input}
          />
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <TextField
            id="standard-basic"
            label="Url"
            variant="standard"
            style={style.input}
          />
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <TextField
            id="standard-basic"
            label="Created at"
            variant="standard"
            style={style.input}
          />
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <TextField
            id="standard-basic"
            label="Updated at"
            variant="standard"
            style={style.input}
          />
        </Typography>
        <ButtonGroup disableElevation variant="contained">
          <Button
            sx={{
              marginTop: "40px",
              color: "black",
              backgroundColor: "white",
              border: "none",
              fontWeight: 800,
              textAlign: "left",
              cursor:'pointer',
              ":hover": {
                bgcolor: "warning.main",
                color: "white",
              },
            }}
            disabled={!validation}
            style={style.button}
          >
            Save
          </Button>
          <Button
            sx={{
              marginTop: "40px",
              color: "black",
              backgroundColor: "white",
              border: "none",
              fontWeight: 800,
              textAlign: "left",
              cursor: 'pointer',
              ":hover": {
                bgcolor: "gray",
                color: "white",
              },
            }}
            onClick={closeModal}
          >
            Cancel
          </Button>
        </ButtonGroup>
      </Box>
    </Modal>
  );
};

export default AddModal;
