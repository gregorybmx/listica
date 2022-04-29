import React from 'react'
import styles from '../styles/Servicios.module.css'
import Placeholder from './Placeholder'

const Servicios = () => {
    return (
        <div>
            <div id={styles['body']}>
                <p id={styles['titulo']}>SERVICIOS</p>
                <div id={styles['contenido']}>
                
                    <div id={styles['fila']} className='container'>
                        <Placeholder img='/img/Servicios/MobileApps.png' title='MOBILE APPS' text='Objective C, Swift, Android, iOS, React, Native, Phone Gap'/>

                        <Placeholder img='/img/Servicios/ITDev.png' title='IT DEVELOPMENT' text='PHP, PL/SQL ORACLE APEX, Java, Node.js, C# Desktop or ASP.NET, C,C++, Database Administration, RESTful Services'/>

                        <Placeholder img='/img/Servicios/IoT.png' title='INTERNET of THINGS'/>

                    </div>

                    <div id={styles['fila']} className='container'>
                        <Placeholder img='/img/Servicios/SmartWebDesign.png' title='SMART WEB DESIGN' text='HTML/CSS, Responsive Design, Javascript/jQuery, Bootstrap, Material Design, Angular'/>

                        <Placeholder img='/img/Servicios/ia.png' title='ARTIFICIAL INTELLIGENCE' text='RPA/RDA, WinAutomation, Blue Prism'/>

                        <Placeholder img='/img/Servicios/ec.png' title='E-COMMERCE' text='Paypal, Shopify'/>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Servicios