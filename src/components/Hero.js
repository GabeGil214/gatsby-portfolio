import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from '@assets/styles.js'

function Hero(props){
  const classes = useStyles();

  return (
      <section id="hero">
        <h1 className={classes.name}><span>Hi, I'm</span> Gabe Gil</h1>
        <Typography variant="p" className={classes.textRight}>React Web Developer</Typography>
      </section>
  )
}

export default Hero;
