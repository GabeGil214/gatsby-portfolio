import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import useStyles from '@assets/styles.js';

function About(props){
  const { value, index, ...other } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      xs={10}
      md={8}
      alignItems="center"
      className={classes.container}
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Grid item xs={8} className={classes.space}>
        <h1 className={classes.center}>About Me</h1>
        <p>I am a front end developer who has been building responsive and user friendly websites
          for the past 2 years. In my spare time, I enjoy building projects and sharpening my Javascript and React skills.</p>
      </Grid>
    </Grid>
  )
}

About.propTypes = {
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

export default About;
