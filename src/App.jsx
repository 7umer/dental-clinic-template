import { useEffect } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Doctors from "./components/Doctors"
import Testimonials from "./components/Testimonials"
import Gallery from "./components/Gallery"
import Appointment from "./components/Appointment"
import Footer from "./components/Footer"
import Map from "./components/Map"
import WhatsApp from "./components/WhatsApp"

function App() {

  useEffect(() => {

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add("show")
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })

    const hiddenElements = document.querySelectorAll(".fade-up")

    hiddenElements.forEach((el)=>observer.observe(el))

    return () => observer.disconnect()

  }, [])

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Doctors/>
      <Testimonials/>
      <Gallery/>
      <Appointment/>
      <Map/>
      <Footer/>
      <WhatsApp/>
    </>
  )
}

export default App