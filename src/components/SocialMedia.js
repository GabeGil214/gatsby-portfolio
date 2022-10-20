import React, { useEffect } from 'react';
import Icon from '@material-ui/core/Icon'
import useStyles from '@assets/styles.js'
import { loadCSS } from 'fg-loadcss'

function SocialMedia() {
  const classes = useStyles();

  useEffect(() => {
      loadCSS('https://use.fontawesome.com/releases/v5.1.0/css/all.css')
  }, [])

  return (
    <React.Fragment>
      <div className={classes.icon}>
        <a target="_blank" rel="noopener noreferrer" href="mailto:gilgabe214@live.com"><Icon className="fas fa-envelope"></Icon></a>
      </div>
      <div className={classes.icon}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/gabegil214"><Icon className="fab fa-github"></Icon></a>
      </div>
      <div className={classes.icon}>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gabegil214"><Icon className="fab fa-linkedin"></Icon></a>
      </div>
    </React.Fragment>
  )
}

export default SocialMedia;
