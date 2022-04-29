import React from 'react'
import Layout from '../components/layout/Layout'
import Carousel from '../components/Carousel'
import Servicios from '../components/Servicios'
import Equipo from '../components/Equipo'

export const Home = () => {
  return (
    <Layout>
      <Carousel name= 'Carousel'/>
      <Servicios/>
    </Layout>
  )
}

export default Home