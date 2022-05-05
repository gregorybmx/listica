import React from 'react'
import styles from '../styles/SeParte.module.css'

const HABLEMOS = () => {
    return (
        <div id={styles['formulario']}>
            <p id={styles['titulo']} className="fs-1 fw-bold">SÉ PARTE</p>
            <p id={styles['subtitulo']} className="fs-5">Te estamos buscándo, sé parte de nuestro equipo</p>
            <p id={styles['etiqueta']} className="fs-5 fw-bold">CORREO ELECTRÓNICO</p>
            <input type="email" className={styles['inputCorreo']} id="email" placeholder="name@example.com"/>
            <p id={styles['etiqueta']} className="fs-5 fw-bold">MENSAJE</p>
            <textarea className={styles['textArea']} id="mensaje" rows="3" placeholder='Escribe aquí'></textarea>
            <p id={styles['etiqueta']} className="fs-5 fw-bold">AGREGAR CV</p>
            <input className="form-control" type="file" id={styles['inputFile']} accept="application/pdf"/>
            <p id={styles['etiqueta']} className="fs-5 fw-bold">NOMBRE</p>
            <input type="text" className={styles['inputNombre']} id="nombre" placeholder="Nombre"/>
            <button id={styles['enviarCV']} className="rounded-pill border-0">Enviar</button>
        </div>
    )
}

export default HABLEMOS