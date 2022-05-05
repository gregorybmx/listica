import React from 'react'
import Hablemos from './Hablemos'
import SeParte from './SeParte'
import styles from '../styles/Contactenos.module.css'

const Contactenos = () => {
  return (    
    <div id={styles['contenido']} className="d-flex justify-content-between">
      <div>
        <Hablemos/>
      </div>
      <div>
        <SeParte/>
      </div>
    </div>
  )
}

export default Contactenos