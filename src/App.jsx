import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App



