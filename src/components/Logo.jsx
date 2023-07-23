import React from 'react'
import { StaticImage } from "gatsby-plugin-image"


function Logo(){

  return (
    <div className="logo-holder">
        <StaticImage src="../images/logo.png" width="300" alt="Gabe Gil Web Design" />
    </div>
  )
}

export default Logo