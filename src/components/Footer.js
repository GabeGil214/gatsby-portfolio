import React from 'react'
import SocialMedia from './SocialMedia'
import Contact from './Contact'

function Footer(){

  return (
      <footer>
        <div className="container">
          <div className="row">
            <SocialMedia />
            <Contact />
          </div>
        </div>
      </footer>
  )
}

export default Footer
