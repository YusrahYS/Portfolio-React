import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './component.jsx/Header.jsx'
import Hero from './component.jsx/Hero.jsx'
import Section from './component.jsx/Section.jsx'
import Footer from './component.jsx/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Hero/>
    <Section/>
    <Footer/>
  </StrictMode>,
)
