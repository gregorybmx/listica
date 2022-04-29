import React from 'react'
import styles from '../styles/Hablemos.module.css'

const HABLEMOS = () => {
    return (
        <div id={styles['formulario']}>
            <p id={styles['titulo']}>HABLEMOS</p>
            <p id={styles['subtitulo']}>Coméntenos tus ideas</p>
            <p id={styles['etiqueta']}>CORREO ELECTRÓNICO</p>
            <input type="email" className={styles['inputCorreo']} id="email" placeholder="name@example.com"/>
            <p id={styles['etiqueta']}>MENSAJE</p>
            <textarea className={styles['textArea']} id="mensaje" rows="3" placeholder='Escribe aquí'></textarea>
            <p id={styles['etiqueta']}>NOMBRE</p>
            <input type="text" className={styles['inputNombre']} id="nombre" placeholder="Nombre"/>
            <button id={styles['enviar']}>Enviar</button>
        </div>
    )
}

export default HABLEMOS