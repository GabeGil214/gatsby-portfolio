import React from 'react';
import PropTypes from 'prop-types';

function About(props){
  const { value, index, ...other } = props;

  return (
    <section id="about">
        <h1>About Me</h1>
        <p>I am a front end developer who has been building responsive and user friendly websites
          for the past 2 years. In my spare time, I enjoy building projects and sharpening my Javascript and React skills.</p>
    </section>
  )
}

About.propTypes = {
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

export default About;
