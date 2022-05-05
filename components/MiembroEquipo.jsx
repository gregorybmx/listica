import React from 'react'
import Image from 'next/image'
import styles from '../styles/MiembroEquipo.module.css'

const MiembroEquipo = (props) => {
    return (
        <div>
            <div id={styles['itemText']} className="fs-4 fw-normal">
                {props.text}
            </div>
            <div id={styles['contenedorImagen']}>
                <Image className="rounded-circle" src={props.image} width={120} height={124} alt="Imgen Perfil Dwayne"/>
            </div>
            <div id={styles['nombreColaborador']} className="text-center">{props.nombre}</div>
            <div id={styles['puesto']} className="text-center fw-bold">{props.puesto}</div>
        </div>
    )
}

export default MiembroEquipo