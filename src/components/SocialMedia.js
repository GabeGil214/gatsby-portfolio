import React, { useEffect } from 'react'
import { loadCSS } from 'fg-loadcss'

function SocialMedia() {

  useEffect(() => {
      loadCSS('https://use.fontawesome.com/releases/v5.1.0/css/all.css')
  }, [])

  return (
    <div className="social-media">
      <div className="icon">
        <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/gabegil214"><i className="fab fa-github"></i></a>
      </div>
      <div className="icon">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gabegil214"><i className="fab fa-linkedin"></i></a>
      </div>
      <div className="icon">
        <a target="_blank" rel="noopener noreferrer" href="mailto:gilgabe214@gmail.com<"><i className="fas fa-envelope"></i></a>
      </div>
    </div>
  )
}

export default SocialMedia
