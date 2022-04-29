import React from 'react'
import styles from '../styles/SeParte.module.css'

const HABLEMOS = () => {
    return (
        <div id={styles['formulario']}>
            <p id={styles['titulo']}>SÉ PARTE</p>
            <p id={styles['subtitulo']}>Te estamos buscándo, sé parte de nuestro equipo</p>
            <p id={styles['etiqueta']}>CORREO ELECTRÓNICO</p>
            <input type="email" className={styles['inputCorreo']} id="email" placeholder="name@example.com"/>
            <p id={styles['etiqueta']}>MENSAJE</p>
            <textarea className={styles['textArea']} id="mensaje" rows="3" placeholder='Escribe aquí'></textarea>
            <p id={styles['etiqueta']}>AGREGAR CV</p>
            <input className="form-control" type="file" id={styles['inputFile']} accept="application/pdf"/>
            <p id={styles['etiqueta']}>NOMBRE</p>
            <input type="text" className={styles['inputNombre']} id="nombre" placeholder="Nombre"/>
            <button id={styles['enviarCV']}>Enviar</button>
        </div>
    )
}

export default HABLEMOS