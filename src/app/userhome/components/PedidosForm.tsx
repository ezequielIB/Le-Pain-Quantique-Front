import React from 'react'
import TextField from '@mui/material/TextField';
import styles from "./pedidosform.module.css";
import Button from '@mui/material/Button';


export const PedidosForm = ({ }) => {

  return (
    <div className={styles.containerForm}>
        <h1>PedidosForm</h1>
        <TextField
          id="opcion1"
          label="opcion1"
          variant="standard"
        />
        <TextField
          id="opcion2"
          label="opcion2"
          variant="standard"
        />
        <TextField
          id="opcion3"
          label="opcion3"
          variant="standard"
        />
        <TextField
          id="opcion4"
          label="opcion4"
          variant="standard"
        />
        <TextField
          id="opcion5"
          label="opcion5"
          variant="standard"
        />
        <Button variant="contained">
          Send
        </Button>
    </div>
  )
}
