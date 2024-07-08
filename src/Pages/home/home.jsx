import React from 'react'
import Header from '../../Components/header'
import Intro from '../../Components/intro'
import About from '../About'
import Experence from '../../Components/Experence'
import Projects from '../../Components/Projects'
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'
import Sidebar from '../../Components/sidebar'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div >
      <Header />
      <div className='bg-primary px-40 py-20 sm:px-5'>
        <Intro />
        <About/>
        <Experence/>
        <Projects/>
        <Contact />
        <Footer/>
        <Sidebar/>
     
      </div>
    </div>
  )
}

export default Home
