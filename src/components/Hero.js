import React from 'react'
import useStyles from '@assets/styles.js'
import { StaticImage } from "gatsby-plugin-image"


function Hero(){
  const classes = useStyles()

  return (
      <section id="hero">
        <div className="container">
          <div className="img-holder">
            <StaticImage src="../images/htmlcssjs.png" alt="HTML/CSS/JS Logo" />
          </div>
          <div className="text-holder">
            <h1 className={classes.name}><span>Hi, I'm</span> Gabe Gil</h1>
            <p className={classes.textRight}>React Web Developer</p>
          </div>
        </div>
      </section>
  )
}

export default Hero
