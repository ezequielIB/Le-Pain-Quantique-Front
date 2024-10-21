"use client"
import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange, amber } from '@mui/material/colors';
import styles from "./cardlogin.module.css";



const CardLogin = () => {

    const theme = createTheme({
        palette: {
            primary: orange,
            secondary: amber,
        },
    });

    return (
        <>
            <div className={styles.container}>
                <ThemeProvider theme={theme}>
                    <h1>Título</h1>
                    <div className={styles.separation}></div>
                    <TextField
                        id="standard-required"
                        label="Usuario"
                        variant="standard"
                    />
                    <div className={styles.separation2}></div>
                    <TextField
                        id="standard-password-input"
                        label="Contraseña"
                        type="password"
                        variant="standard"
                    />
                    <div className={styles.separation2}></div>
                    <Button variant="contained">
                        Send
                    </Button>
                </ThemeProvider>
            </div>
        </>
    )
}

export default CardLogin