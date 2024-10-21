import React from 'react'
import styles from "./login.module.css";
import CardLogin from './components/CardLogin';

export default function Login() {
  return (
    <main className={styles.main}>
        <CardLogin />
    </main>
  )
}
