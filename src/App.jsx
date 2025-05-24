import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
         <Title subtitle='Our PROGRAM' title='What We Offer'/>
         <Programs />
         <About />
         <Title subtitle='Gallery' title='Campus Photos'/>
         <Campus />
         <Title subtitle='TESTIMONIALS' title='What Student Says'/>
         <Testimonial /> 
         <Title subtitle='Contact Us' title='Get In Touch'/>
         <Contact />
      </div>
    </div>
  )
}

export default App