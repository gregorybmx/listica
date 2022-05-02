import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Carousel from '../components/Carousel'
import Servicios from '../components/Servicios'
import Equipo from '../components/Equipo'
import Contactenos from '../components/Contactenos'

export const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Listica</title>
      </Head>
      <section id='carousel'>
        <Carousel name= 'Carousel'/>
      </section>

      <section id='Servicios'>
        <Servicios/>
      </section>

      <section id='Equipo'>
        <Equipo/>
      </section>

      <section id='Contactenos'>
        <Contactenos/>
      </section>
    </Layout>
  )
}

export default Home