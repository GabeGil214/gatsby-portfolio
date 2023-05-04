import React, { useEffect } from 'react';
import { loadCSS } from 'fg-loadcss'

function SocialMedia() {
  const classes = useStyles();

  useEffect(() => {
      loadCSS('https://use.fontawesome.com/releases/v5.1.0/css/all.css')
  }, [])

  return (
    <div className="social-media">
      <div className={classes.icon}>
        <a target="_blank" rel="noopener noreferrer" href="mailto:gilgabe214@live.com"><i className="fas fa-envelope"></i></a>
      </div>
      <div className={classes.icon}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/gabegil214"><i className="fab fa-github"></i></a>
      </div>
      <div className={classes.icon}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gabegil214"><i className="fab fa-linkedin"></i></a>
      </div>
    </div>
  )
}

export default SocialMedia;
