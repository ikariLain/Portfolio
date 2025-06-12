import React, { Component } from 'react'
import About from './About-Me/About'
import Skills from './Skills/Skills'
import Experiences from './Experiences/Experiences'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import './Sections.css'


export default class Sections extends Component {
  render() {
    return (
    <div className='Sections-Container'>
        <section id='About'>
            <About />
        </section>
        
        <section id='Skills' className='Section-Item'>
            <Skills />
        </section>
        
        <section id='EXP' className='Section-Item'>
            <Experiences />
        </section>
        
        <section id='Projects' className='Section-Item'>
            <Projects/>
        </section>
        
        <section id='Contact' className='Section-Item'>
            <Contact/>
        </section>
    </div>
    
    
    )
  }
}
