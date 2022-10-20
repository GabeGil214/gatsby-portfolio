import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import useStyles from '@assets/styles.js';
import Grid from '@material-ui/core/Grid';


function Projects(props) {
  const { value, index, ...other } = props;
  const classes = useStyles();
  const ProjectBtn = withStyles({
    root: {
      color: '#333',
      backgroundColor: 'white',
      margin: '10px auto',
      display: 'block',
      width: 'fit-content',
    },
    '&:hover': {
      backgroundColor: '#ddd',
    }
  })(Button)

  return (
    <Grid
      container
      sm={12}
      alignItems="center"
      className={classes.container}
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      >
      <Grid item xs={12} lg={8} centered className={`${classes.space} projects-container`}>
        <h1 className={classes.title}>Projects</h1>
        <Grid
          container
          direction="column"
          justify="space-around"
          >
          <Grid item xs={12} >
            <div className={classes.projectTile}>
              <i className={`fas fa-music ${classes.projectIcon}`}></i>
              <h2>My Custom Playlist</h2>
              <div className={classes.tile}>
                  <img
                    className="vidyard-player-embed"
                    src="https://play.vidyard.com/a4pUQ3TSbsQKAjzrWJUoX9.jpg"
                    data-uuid="a4pUQ3TSbsQKAjzrWJUoX9"
                    data-v="4"
                    data-type="inline"
                    alt="Video Thumbnail"
                  />
                <p>
                  Select your favorite artist, choose your musical preferences, and let Spotify create a
                  custom playlist made just for you!
                </p>
                <ProjectBtn size="small" variant="contained" href="https://github.com/GabeGil214/my-playlist" rel="noopener noreferrer" target="_blank">View on Github<i class="fab fa-github"></i></ProjectBtn>
                <ProjectBtn size="small" variant="contained" href="https://mypersonalizedplaylist.com/">Live Site</ProjectBtn>
              </div>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className={classes.projectTile}>
              <i className={`fas fa-university ${classes.projectIcon}`}></i>
              <h2>Music Visualizer</h2>
              <div className={classes.tile}>
                <p>
                  Got an exam coming up? Brush up and quiz yourself using customized
                  decks and flashcards right on your phone!
                </p>
                <ProjectBtn size="small" variant="contained" href="https://github.com/GabeGil214/creative-coding/" rel="noopener noreferrer" target="_blank">View on Github<i class="fab fa-github"></i></ProjectBtn>
                <ProjectBtn size="small" variant="contained" href="https://gabegil214.github.io/creative-coding/">Live Site</ProjectBtn>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.projectTile}>
              <i className={`far fa-question-circle ${classes.projectIcon}`}></i>
              <h2>Would You Rather?</h2>
              <div className={classes.tile}>
                <p>
                  Would you rather have the ability to fly or have telekenesis?
                  Vote and compare your answer with others!
                </p>
                <ProjectBtn size="small" variant="contained" href="https://www.github.com/Gabegil214/would-you-rather-" rel="noopener noreferrer" target="_blank">View on Github<i class="fab fa-github"></i></ProjectBtn>
                <ProjectBtn size="small" variant="contained" href="/visualizer.html">Live Demo</ProjectBtn>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

Projects.propTypes = {
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

export default Projects;
