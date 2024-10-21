import React from 'react'
import styles from "./cardhome.module.css";

interface props {
    titulo:string
    subtitulo:string
    url:string
}

export const CardHome = ({titulo, subtitulo, url}:props) => {
  return (
    <a
    href={url}
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2>
    {titulo} <span>-&gt;</span>
    </h2>
    <p>{subtitulo}</p>
  </a>
  )
}
