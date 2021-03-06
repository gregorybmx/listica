import React from 'react'
import styles from '../styles/Placeholder.module.css'
import Image from 'next/image'

const Placeholder = (props) => {
    return (
        <div id={styles['placeholder']} className="card justify-content-around rounded-2">
            <div id={styles['imagenContainer']}>
                <Image src={props.img} layout="responsive" width={39} height={38} className="card-img-top" alt={props.title}/>
            </div>
            <div id={styles['contenido']} className="card-body">
                <h5 id={styles['titulo']} className="card-title fs-6 fw-bold">{props.title}</h5>
                <p id={styles['texto']} className="card-text">{props.text}</p>
            </div>
        </div>
    )
}

export default Placeholder