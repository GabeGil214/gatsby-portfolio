import React from 'react'

function Projects() {

  return (
      <section id="projects">
        <div className="container">
          <h1>Projects</h1>
          <div className="row">
            <div className="project">
                <i className="fas fa-music"></i>
                <h2>My Custom Playlist</h2>
                <div>
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
                  <a href="https://github.com/GabeGil214/my-playlist" rel="noopener noreferrer" target="_blank">View on Github<i className="fab fa-github"></i></a>
                  <a size="small" variant="contained" href="https://mypersonalizedplaylist.com/">Live Site</a>
                </div>
              </div>

              <div className="project">
                <i className="fas fa-glasses"></i>
                <h2>Music Visualizer</h2>
                <div>
                  <p>
                    Visualizer that responds in real time to the sounds through your microphone or to a preset mp3 file. Take a look and enjoy the various color options!
                  </p>
                  <a href="https://github.com/GabeGil214/creative-coding/" rel="noopener noreferrer" target="_blank">View on Github<i className="fab fa-github"></i></a>
                  <a href="https://visualizer.gabegil.dev">Live Site</a>
                </div>
              </div>
          </div>
        </div>
      </section>
  )
}

export default Projects
