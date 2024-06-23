import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Software from './Components/Software/Software'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Careers from './Components/Careers/Careers'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='We Working On' title='Software Development Life Cycle'/>
      <Software/>
      <About/>
      <Services/>
       <Title subTitle='Explore Our Openings' title='Careers'/>
      <Careers/>
      <Title subTitle='Contact Us' title='Get In Touch'/> 
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
