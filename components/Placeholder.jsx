/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../styles/Placeholder.module.css'

const Placeholder = (props) => {
    return (
        <div id={styles['placeholder']} className="card">
            <img id={styles['imagen']} src={props.img} className="card-img-top" alt="MobileAppsImage"/>
            <div id={styles['contenido']} className="card-body">
                <h5 id={styles['titulo']} className="card-title">{props.title}</h5>
                <p id={styles['texto']} className="card-text">{props.text}</p>
            </div>
        </div>
    )
}

export default Placeholder