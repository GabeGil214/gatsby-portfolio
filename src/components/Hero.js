import React from 'react'
import { StaticImage } from "gatsby-plugin-image"


function Hero(){

  return (
      <section id="hero">
        <div className="container">
          <div className="text-holder">
            <h1><span>Hi, I'm</span> Gabe Gil</h1>
            <p>React Web Developer</p>
          </div>
        </div>
      </section>
  )
}

export default Hero
